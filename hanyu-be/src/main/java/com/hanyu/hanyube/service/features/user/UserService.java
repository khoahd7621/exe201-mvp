package com.hanyu.hanyube.service.features.user;

import com.hanyu.hanyube.domain.constants.ErrorCodeConstants;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    private void initData() {
        var passwordEncoder = new BCryptPasswordEncoder();
        userRepository.save(UserEntity.builder()
                .name("trang")
                .phone("0337425177")
                .password(passwordEncoder.encode("123123"))
                .email("trang@gmail.com")
                .role(UserRoleEnum.USER)
                .build());
        userRepository.save(UserEntity.builder()
                .name("trang")
                .phone("0337425177")
                .password(passwordEncoder.encode("123123"))
                .email("nam@gmail.com")
                .role(UserRoleEnum.ADMIN)
                .build());
    }


    public UserEntity getByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new BadRequestException(String.format(ErrorCodeConstants.USER_NOT_FOUND, email)));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return getByEmail(username);
    }
}