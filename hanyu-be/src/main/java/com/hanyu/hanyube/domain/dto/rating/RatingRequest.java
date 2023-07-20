package com.hanyu.hanyube.domain.dto.rating;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class RatingRequest {

    @JsonIgnore
    private UUID userId;

    @NotNull
    @Builder.Default
    @Min(value = 1, message = "Value must be lager than 0")
    @Max(value = 5, message = "Value must be small than 6")
    private int star = 0;

    @NotNull
    private String description;

}
