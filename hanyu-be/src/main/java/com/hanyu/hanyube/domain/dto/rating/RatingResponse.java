package com.hanyu.hanyube.domain.dto.rating;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RatingResponse {

    private UUID id;

    private UUID user_id;

    private int star;

    private String description;

    private Instant createdAt;

    private Instant updatedAt;
}
