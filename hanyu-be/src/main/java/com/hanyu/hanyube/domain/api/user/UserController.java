package com.hanyu.hanyube.domain.api.user;

import com.hanyu.hanyube.domain.dto.user.ChangePasswordRequest;
import com.hanyu.hanyube.domain.dto.user.ProfileUpdateRequest;
import com.hanyu.hanyube.domain.dto.user.UpdatePackageRequest;
import com.hanyu.hanyube.domain.dto.user.UserCreateRequest;
import com.hanyu.hanyube.domain.dto.user.UserProfileResponse;
import com.hanyu.hanyube.domain.enums.PackageTime;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.features.user.UserService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/api/admin/users/profiles")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.ADMIN + "')")
    public List<UserProfileResponse> getAllUsers(@RequestParam int pageSize, @RequestParam int pageNum) {
        return userService.getAllProfile(pageSize, pageNum);
    }

    @GetMapping("/api/users/profile")
    @ResponseStatus(HttpStatus.OK)
    @PreAuthorize("hasAnyRole('" + UserRoleEnum.Role.USER + "', '" + UserRoleEnum.Role.ADMIN + "')")
    public UserProfileResponse getInfo() {
        return userService.getProfile();
    }

    @PostMapping("/api/users/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid UserCreateRequest request) {
        userService.create(request);
    }

    @PutMapping("/api/users/profile")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public UserProfileResponse update(@RequestBody @Valid ProfileUpdateRequest request) {
        return userService.update(request);
    }

    @PutMapping("/api/admin/users/upgrade")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.ADMIN + "')")
    @ResponseStatus(HttpStatus.OK)
    public UserProfileResponse upgradePackage(@RequestBody @Valid UpdatePackageRequest request) {
        return userService.updateUserProfile(request);
    }

    @DeleteMapping("/api/admin/users/{userId}")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.ADMIN + "')")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable UUID userId) {
        userService.delete(userId);
    }

    @PutMapping("/api/password")
    @PreAuthorize("hasAnyRole('" + UserRoleEnum.Role.USER + "', '" + UserRoleEnum.Role.ADMIN + "')")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void changePassword(@RequestBody @Valid ChangePasswordRequest request) {
        userService.changePassword(request);
    }

    @GetMapping("/api/upgrade")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void userRequestUpgrade(@RequestParam @Valid PackageTime packageTime) {
        userService.notifyTelegram(packageTime);
    }

}
