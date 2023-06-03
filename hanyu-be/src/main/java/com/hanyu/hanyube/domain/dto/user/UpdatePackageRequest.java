package com.hanyu.hanyube.domain.dto.user;

import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UpdatePackageRequest {
    @NotNull
    private UsePackageEnum usePackage;
}
