package com.hanyu.hanyube.domain.api.user;

import com.hanyu.hanyube.domain.dto.rating.RatingRequest;
import com.hanyu.hanyube.domain.dto.rating.RatingResponse;
import com.hanyu.hanyube.domain.dto.rating.RatingResponses;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.service.features.rating.RatingService;
import com.hanyu.hanyube.service.utils.AuthUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class RatingController {

    private final RatingService ratingService;

    @PostMapping("/api/ratings")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody @Valid RatingRequest request) {
        request.setUserId(AuthUtils.getUserId());
        ratingService.create(request);
    }

    @GetMapping("/api/ratings/my-rating")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.OK)
    public RatingResponse get() {
        return ratingService.getByUserId(AuthUtils.getUserId());
    }

    @PutMapping("/api/ratings")
    @PreAuthorize("hasRole('" + UserRoleEnum.Role.USER + "')")
    @ResponseStatus(HttpStatus.CREATED)
    public void update(@RequestBody @Valid RatingRequest request) {
        request.setUserId(AuthUtils.getUserId());
        ratingService.update(request);
    }

    @GetMapping("/api/public/ratings")
    @ResponseStatus(HttpStatus.OK)
    public RatingResponses getAll() {
        return ratingService.getAll();
    }
}
