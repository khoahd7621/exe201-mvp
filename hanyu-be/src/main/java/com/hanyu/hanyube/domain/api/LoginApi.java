package com.hanyu.hanyube.domain.api;

import com.hanyu.hanyube.domain.dto.login.LoginForm;
import com.hanyu.hanyube.domain.dto.login.UserAccessResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;

public interface LoginApi {
    @PostMapping("/api/user/login")
    UserAccessResponse Login(@RequestBody @Valid LoginForm request);
}
