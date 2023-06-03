package com.hanyu.hanyube.service.utils;


import com.hanyu.hanyube.service.exceptions.BadRequestException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.UUID;

import static com.hanyu.hanyube.domain.constants.ErrorCodeConstants.TOKEN_IS_MISSING;

@Component
public class AuthUtils {
    public static UUID getUserId() {
        var userId = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (Objects.isNull(userId)) {
            throw new BadRequestException(TOKEN_IS_MISSING);
        }
        return UUID.fromString(String.valueOf(userId));
    }
}
