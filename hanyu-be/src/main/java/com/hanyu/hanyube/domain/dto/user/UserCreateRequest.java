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

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateRequest {

    @NotNull
    private String name;

    @NotNull
    @Email
    private String email;

    @NotNull
    private String password;

    @Pattern(regexp = "^0\\d{9}$", message = "Số điện thoại không hợp lệ")
    private String phone;

    private String shortDescription;
}
