package com.hanyu.hanyube.domain.api.auth;

import com.hanyu.hanyube.domain.dto.login.LoginForm;
import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import com.hanyu.hanyube.service.features.auth.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/api/auth/login")
    public UserAccessResponse Login(@RequestBody @Valid LoginForm request) {
        return authService.Login(request.getEmail(), request.getPassword());
    }


    @PostMapping("/api/settings/test")
    @PreAuthorize("hasRole('ADMIN')")
    public String TestAuthorization() {
        return "Oke Pro";
    }
}
