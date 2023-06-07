package com.hanyu.hanyube.domain.dto.test;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TestResultRequest {

    @JsonIgnore
    private UUID userId;

    @NotNull
    private int testId;

    private int totalScore;

    private int realScore;

    @NotNull
    private Instant createdAt;

    @NotEmpty
    private List<PartResult> partResults;

    @NotEmpty
    private List<UserAnswer> userAnswers;

    @Setter
    @Getter
    public static class PartResult{
        private String label;
        private double rate;
    }

    @Setter
    @Getter
    public static class UserAnswer{
        private int questionId;
        private String answer;
    }
}
