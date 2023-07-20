package com.hanyu.hanyube.domain.dto.rating;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RatingResponses {

    private int total;

    private double avg;

    @Builder.Default
    private List<RatingResponse> ratings = List.of();
}
