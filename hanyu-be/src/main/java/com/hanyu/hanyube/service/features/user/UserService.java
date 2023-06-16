package com.hanyu.hanyube.service.features.user;

import com.hanyu.hanyube.config.TelegramBot;
import com.hanyu.hanyube.domain.constants.ErrorCodeConstants;
import com.hanyu.hanyube.domain.dto.user.ChangePasswordRequest;
import com.hanyu.hanyube.domain.dto.user.ProfileUpdateRequest;
import com.hanyu.hanyube.domain.dto.user.UpdatePackageRequest;
import com.hanyu.hanyube.domain.dto.user.UserCreateRequest;
import com.hanyu.hanyube.domain.dto.user.UserProfileResponse;
import com.hanyu.hanyube.domain.enums.PackageTime;
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
import java.time.Instant;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.UUID;

import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.ACCOUNT_NOT_EXIST;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.MISSING_PERMISSION;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.PASSWORD_NOT_CORRECT;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.PASSWORD_NOT_MATCH;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.USER_ALREADY_EXISTED;
import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.USER_NOT_FOUND;
import static java.time.temporal.ChronoUnit.DAYS;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final TelegramBot telegramBot;

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

    public List<UserEntity> getAllByIds(final Set<UUID> userIds) {
        return userRepository.findByIdIn(userIds);
    }

    public UserProfileResponse getProfile() {
        var userId = AuthUtils.getUserId();
        var userEntity = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(USER_NOT_FOUND, userId)));
        var response = modelMapper.map(userEntity, UserProfileResponse.class);
        if (Objects.nonNull(response.getPackageTime()) && !response.getPackageTime().equals(PackageTime.LIFETIME)) {
            response.setIsSubscribed(Objects.compare(response.getSubscriptionExpiredDate(), Instant.now(), Instant::compareTo) > 0);
        } else if (Objects.nonNull(response.getPackageTime())) {
            response.setIsSubscribed(true);
        }
        return response;
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
        var response = modelMapper.map(userRepository.saveAndFlush(userEntity), UserProfileResponse.class);
        if (Objects.nonNull(response.getPackageTime()) && !response.getPackageTime().equals(PackageTime.LIFETIME)) {
            response.setIsSubscribed(Objects.compare(response.getSubscriptionExpiredDate(), Instant.now(), Instant::compareTo) > 0);
        } else if (Objects.nonNull(response.getPackageTime())) {
            response.setIsSubscribed(true);
        }
        return response;
    }

    public UserProfileResponse updateUserProfile(final UpdatePackageRequest request) {
        //Check permission of authenticated user
        var entity = userRepository.findById(AuthUtils.getUserId())
                .orElseThrow(() -> new BadRequestException(MISSING_PERMISSION));
        if (entity.getRole().equals(UserRoleEnum.USER)) {
            throw new BadRequestException(MISSING_PERMISSION);
        }

        var userEntity = getByUserId(request.getUserId());
        modelMapper.map(request, userEntity);
        switch (request.getPackageTime()) {
            case QUARTER -> {
                userEntity.setSubscriptionExpiredDate(Instant.now().plus(PackageTime.QUARTER.getTime(), DAYS));
                userEntity.setPackageTime(PackageTime.QUARTER);
            }
            case YEAR -> {
                userEntity.setSubscriptionExpiredDate(Instant.now().plus(PackageTime.YEAR.getTime(), DAYS));
                userEntity.setPackageTime(PackageTime.YEAR);
            }
            case LIFETIME -> {
                userEntity.setSubscriptionExpiredDate(null);
                userEntity.setPackageTime(PackageTime.LIFETIME);
            }
        }
        var response = modelMapper.map(userRepository.saveAndFlush(userEntity), UserProfileResponse.class);
        if (Objects.nonNull(response.getPackageTime()) && !response.getPackageTime().equals(PackageTime.LIFETIME)) {
            response.setIsSubscribed(Objects.compare(userEntity.getSubscriptionExpiredDate(), Instant.now(), Instant::compareTo) > 0);
        } else if (Objects.nonNull(response.getPackageTime())) {
            response.setIsSubscribed(true);
        }
        return response;
    }

    public List<UserProfileResponse> getAllProfile(int pageSize, int pageNum) {
        checkAdminPermission(AuthUtils.getUserId());
        Pageable pageable = PageRequest.of(pageNum - 1, pageSize, Sort.by("name").descending());

        return userRepository.findAll(pageable).stream().map(it -> {
            var response = modelMapper.map(it, UserProfileResponse.class);
            if (Objects.nonNull(response.getPackageTime()) && !response.getPackageTime().equals(PackageTime.LIFETIME)) {
                response.setIsSubscribed(Objects.compare(response.getSubscriptionExpiredDate(), Instant.now(), Instant::compareTo) > 0);
            } else if (Objects.nonNull(response.getPackageTime())) {
                response.setIsSubscribed(true);
            }
            return response;
        }).toList();
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

    public void changePassword(ChangePasswordRequest request) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        var userId = AuthUtils.getUserId();
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new BadRequestException(String.format(USER_NOT_FOUND, userId)));
        if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            throw new BadRequestException(PASSWORD_NOT_CORRECT);
        }
        if(Objects.compare(request.getConfirmPassword(), request.getNewPassword(), String::compareTo) != 0){
            throw new BadRequestException(PASSWORD_NOT_MATCH);
        }
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }

    public void notifyTelegram(PackageTime packageTime) {
        telegramBot.sendMessageToChat("-1001615406900", String.format("Người dùng %s yêu cầu nâng cấp tài khoản lên gói : %s ",
                AuthUtils.getUserId(),
                packageTime.name())
        );
    }
}