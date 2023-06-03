package com.hanyu.hanyube.domain.dto.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.domain.enums.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserProfileResponse {
    private UUID id;
    private String email;
    private String name;
    private String shortDescription;
    private String phone;
    private UsePackageEnum userPackage;
    private UserRoleEnum role;
    @Builder.Default
    private Boolean isSubscribed = Boolean.FALSE;
    @Builder.Default
    private Instant subscriptionExpiredDate = null;
    private UserStatusEnum status;
}