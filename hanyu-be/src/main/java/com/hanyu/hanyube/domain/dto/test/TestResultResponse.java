package com.hanyu.hanyube.domain.dto.test;


import com.fasterxml.jackson.annotation.JsonInclude;
import com.hanyu.hanyube.service.entities.PartResultEntity;
import com.hanyu.hanyube.service.entities.UserAnswerEntity;
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
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TestResultResponse {

    private long id;

    private UUID userId;

    private int testId;

    @Builder.Default
    private int totalScore = 0;

    @Builder.Default
    private int realScore = 0;

    private Instant createdAt;

    private List<PartResultEntity> partResults;
    private List<UserAnswerEntity> userAnswers;
}
