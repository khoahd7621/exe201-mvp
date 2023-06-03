package com.hanyu.hanyube.domain.dto.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import com.hanyu.hanyube.domain.enums.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserProfileResponse {
    private UUID userId;
    private String email;
    private String name;
    private String shortDescription;
    private String phone;
    private UsePackageEnum userPackage;
    private UserStatusEnum status;
}