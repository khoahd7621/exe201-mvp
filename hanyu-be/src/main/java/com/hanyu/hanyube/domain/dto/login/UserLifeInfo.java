package com.hanyu.hanyube.domain.dto.login;

import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import com.hanyu.hanyube.domain.enums.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class UserLifeInfo {
    private String name;
    private String shortDescription;
    private UsePackageEnum userPackage;
    private UserStatusEnum userStatus;
}
