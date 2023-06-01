package com.hanyu.hanyube.service.features.token;

import com.hanyu.hanyube.domain.dto.login.GenerateTokenRequest;
import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import com.hanyu.hanyube.domain.enums.TokenTypeEnum;
import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.features.login.UserTokenGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TokenService {
    private final UserTokenGenerator tokenGenerator;

    public UserAccessResponse generateAccessTokenPair(final UserEntity userEntity) {
        final var userId = userEntity.getId();
        return UserAccessResponse.builder()
                .accessToken(tokenGenerator.generateToken(
                        GenerateTokenRequest.builder()
                                .userId(userId)
                                .tokenType(TokenTypeEnum.ACCESS_TOKEN)
                                .build(),
                        userEntity.getRole()))
                .refreshToken(tokenGenerator.generateToken(GenerateTokenRequest.builder()
                        .userId(userId)
                        .tokenType(TokenTypeEnum.REFRESH_TOKEN)
                        .build(), userEntity.getRole()))
                .build();
    }
}
