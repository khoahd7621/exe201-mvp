package com.hanyu.hanyube.service.features.login;

import com.hanyu.hanyube.domain.api.LoginApi;
import com.hanyu.hanyube.domain.dto.login.LoginForm;
import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController implements LoginApi {

    private final LoginService loginService;
    @Override
    public UserAccessResponse Login(LoginForm request) {
        return loginService.login(request.getEmail(), request.getPassword());
    }
}
