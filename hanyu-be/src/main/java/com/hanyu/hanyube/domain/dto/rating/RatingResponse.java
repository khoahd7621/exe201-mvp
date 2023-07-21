package com.hanyu.hanyube.domain.dto.rating;

import com.hanyu.hanyube.domain.dto.user.UserProfileResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RatingResponse {

    private UUID id;

    private UserProfileResponse userProfile;

    private int star;

    private String description;

    private Instant createdAt;

    private Instant updatedAt;
}
