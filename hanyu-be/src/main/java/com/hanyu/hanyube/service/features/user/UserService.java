package com.hanyu.hanyube.service.features.user;

import com.hanyu.hanyube.domain.constants.ErrorCodeConstants;
import com.hanyu.hanyube.domain.dto.user.ProfileUpdateRequest;
import com.hanyu.hanyube.domain.dto.user.UpdatePackageRequest;
import com.hanyu.hanyube.domain.dto.user.UserCreateRequest;
import com.hanyu.hanyube.domain.dto.user.UserProfileResponse;
import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.domain.enums.UserStatusEnum;
import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.Set;
import java.util.UUID;

import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.ACCOUNT_NOT_EXIST;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.MISSING_PERMISSION;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.USER_ALREADY_EXISTED;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.USER_NOT_FOUND;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @PostConstruct
    public void createAdminAccount() {
        var oldEntity = userRepository.findByEmail("admin@gmail.com");
        oldEntity.ifPresent(userRepository::delete);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        userRepository.save(UserEntity.builder()
                .phone("0337425177")
                .role(UserRoleEnum.ADMIN)
                .name("admin")
                .password(passwordEncoder.encode("123123"))
                .shortDescription("Thich an kem")
                .email("admin@gmail.com")
                .usePackage(UsePackageEnum.PREMIUM)
                .status(UserStatusEnum.ACTIVE)
                .build());
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new BadRequestException(String.format(ErrorCodeConstants.USER_NOT_FOUND, username)));
    }

    public UserEntity getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new BadRequestException(String.format(ErrorCodeConstants.USER_NOT_FOUND, email)));
    }

    public UserEntity getByUserId(UUID userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(
                        String.format(USER_NOT_FOUND, userId)));
    }

    public List<UserEntity> getAllByIds(final Set<UUID> userIds){
        return userRepository.findByIdIn(userIds);
    }

    public UserProfileResponse getProfile() {
        var userId = AuthUtils.getUserId();
        var userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(USER_NOT_FOUND, userId)));
        return modelMapper.map(userEntity, UserProfileResponse.class);
    }

    public void create(UserCreateRequest userCreateRequest) {
        if (userRepository.existsByEmail(userCreateRequest.getEmail())) {
            throw new BadRequestException(String.format(USER_ALREADY_EXISTED, userCreateRequest.getEmail()));
        }
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        var userEntity = modelMapper.map(userCreateRequest, UserEntity.class);
        userEntity.setPassword(passwordEncoder.encode(userCreateRequest.getPassword()));
        userRepository.save(userEntity);
    }

    public UserProfileResponse update(ProfileUpdateRequest request) {
        var userId = AuthUtils.getUserId();
        var userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(USER_NOT_FOUND, userId)));
        modelMapper.map(request, userEntity);
        return modelMapper.map(userRepository.saveAndFlush(userEntity), UserProfileResponse.class);
    }

    public UserProfileResponse updateUserProfile(final UUID userId, final UpdatePackageRequest request) {
        //Check permission of authenticated user
        userRepository.findById(AuthUtils.getUserId())
                .orElseThrow(() -> new BadRequestException(MISSING_PERMISSION));

        var userEntity = getByUserId(userId);
        modelMapper.map(request, userEntity);
        return modelMapper.map(userRepository.saveAndFlush(userEntity), UserProfileResponse.class);
    }

    public List<UserProfileResponse> getAllProfile(int pageSize, int pageNum) {
        checkAdminPermission(AuthUtils.getUserId());
        Pageable pageable = PageRequest.of(pageNum - 1, pageSize, Sort.by("name").descending());

        return userRepository.findAll(pageable).stream().map(it -> modelMapper.map(it, UserProfileResponse.class)).toList();
    }

    public void checkAdminPermission(UUID userId) {
        var userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(ACCOUNT_NOT_EXIST, userId)));
        if (userEntity.getRole().equals(UserRoleEnum.USER)) {
            throw new BadRequestException(MISSING_PERMISSION);
        }
    }

    public void delete(UUID userId) {
        checkAdminPermission(AuthUtils.getUserId());
        var userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(USER_NOT_FOUND, userId)));
        userRepository.delete(userEntity);
    }
}