package com.hanyu.hanyube.domain.api.user;


import com.hanyu.hanyube.domain.dto.test.TestResultRequest;
import com.hanyu.hanyube.domain.dto.test.TestResultResponse;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.features.test.TestResultService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final TestResultService testResultService;
    @PostMapping("/api/user/test-result")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid TestResultRequest request){
        testResultService.create(request);
    }

    @GetMapping("/api/user/test-result")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public List<TestResultResponse> getAll(){
        return testResultService.getAll();
    }
}
