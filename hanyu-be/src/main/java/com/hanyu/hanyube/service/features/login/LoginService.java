package com.hanyu.hanyube.service.features.login;

import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.features.token.TokenService;
import com.hanyu.hanyube.service.features.user.UserService;
import com.hanyu.hanyube.service.security.CredentialService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final UserService userService;
    private final CredentialService credentialService;
    private final TokenService tokenService;

    public UserAccessResponse login(String email, String password) {
        var userEntity = userService.getByEmail(email);
        if (credentialService.checkPassword(userEntity.getPassword(), password)) {
            return tokenService.generateAccessTokenPair(userEntity);
        }
        throw new BadRequestException("Account Information Is Invalid!");
    }
}
