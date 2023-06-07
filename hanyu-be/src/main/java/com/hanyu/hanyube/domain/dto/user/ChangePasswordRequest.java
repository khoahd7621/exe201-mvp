package com.hanyu.hanyube.domain.dto.user;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChangePasswordRequest {
    @NotNull
    private String oldPassword;
    @NotNull
    @Length(min = 6, message = "Password must be 6 character")
    private String newPassword;
    @NotNull
    @Length(min = 6, message = "Password must be 6 character")
    private String confirmPassword;
}
