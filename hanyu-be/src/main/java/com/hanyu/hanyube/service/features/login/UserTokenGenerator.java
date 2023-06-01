package com.hanyu.hanyube.service.features.login;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.aventrix.jnanoid.jnanoid.NanoIdUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hanyu.hanyube.domain.dto.login.GenerateTokenRequest;
import com.hanyu.hanyube.domain.dto.login.TokenClaim;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.utils.MapUtils;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;
import java.util.Set;

@Component
@RequiredArgsConstructor
public class UserTokenGenerator {

    private final ObjectMapper objectMapper;

    @Value("${hu.jwt.key}")
    String data;

    public String generateToken(GenerateTokenRequest request, UserRoleEnum roles) {

        final var insNow = Instant.now();
        final var now = new Date(insNow.toEpochMilli());

        final var expiredAt = new Date(insNow.plus(5, ChronoUnit.MINUTES).toEpochMilli());

        final var tokenClaim = TokenClaim.builder()
                .userId(request.getUserId())
                .userPackage(request.getUsePackage())
                .tokenType(request.getTokenType())
                .userRole(request.getUserRole())
                .build();

        final var userClaims =  MapUtils.stripNullValue(objectMapper.convertValue(tokenClaim, Map.class));
        final var claims = Map.of("tokenClaim", userClaims);

        return JWT.create()
                .withKeyId("v1")
                .withJWTId(NanoIdUtils.randomNanoId())
                .withPayload(claims)
                .withIssuedAt(now)
                .withIssuer("hanyu-dev")
                .withExpiresAt(expiredAt)
                .sign(Algorithm.HMAC256(data.getBytes()));
    }
}