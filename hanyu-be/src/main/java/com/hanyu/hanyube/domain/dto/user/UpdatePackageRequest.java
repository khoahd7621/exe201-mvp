package com.hanyu.hanyube.domain.dto.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hanyu.hanyube.domain.enums.PackageTime;
import com.hanyu.hanyube.domain.enums.UsePackageEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.UUID;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UpdatePackageRequest {

    @NotNull
    private UUID userId;

    @JsonIgnore
    @Builder.Default
    private UsePackageEnum usePackage = UsePackageEnum.PREMIUM;

    @NotNull
    @Builder.Default
    private PackageTime packageTime = PackageTime.QUARTER;
}
