package com.hanyu.hanyube.service.features.auth;

import com.hanyu.hanyube.domain.constants.ErrorCodeConstants;
import com.hanyu.hanyube.domain.dto.login.TokenClaim;
import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import com.hanyu.hanyube.domain.enums.TokenTypeEnum;
import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.features.user.UserService;
import com.hanyu.hanyube.service.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtUtils jwtUtils;
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserAccessResponse Login(String username, String password) {
        try {
            var user = authByUserAndPassword(username, password);
            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword(), user.getAuthorities()));
            var tokenClaims = TokenClaim.builder()
                    .userPackage(user.getUserPackage())
                    .tokenType(TokenTypeEnum.ACCESS_TOKEN)
                    .userId(user.getId())
                    .userRole(user.getRole())
                    .build();
            return UserAccessResponse.builder()
                    .accessToken(jwtUtils.generate(username, tokenClaims))
                    .refreshToken(jwtUtils.generate(username, tokenClaims))
                    .build();
        } catch (Exception e) {
            throw new BadCredentialsException("Account invalid!");
        }
    }

    public UserEntity authByUserAndPassword(String userName, String password) {
        var user = userService.getByEmail(userName);
        var validUser = passwordEncoder.matches(password, user.getPassword());
        if (!validUser) {
            throw new BadRequestException(String.format(ErrorCodeConstants.USER_NOT_FOUND, userName));
        }
        return user;
    }
}
