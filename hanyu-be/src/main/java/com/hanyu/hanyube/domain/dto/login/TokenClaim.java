package com.hanyu.hanyube.domain.dto.login;

import com.hanyu.hanyube.domain.enums.TokenTypeEnum;
import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TokenClaim {
    private UUID userId;
    private UsePackageEnum userPackage;
    private TokenTypeEnum tokenType;
    private UserRoleEnum userRole;
}
