package com.hanyu.hanyube.domain.dto.comment;

import com.hanyu.hanyube.domain.dto.file.FileResponse;
import com.hanyu.hanyube.domain.dto.login.UserLifeInfo;
import com.hanyu.hanyube.domain.enums.MemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CommentResponse {
    private UUID id;
    private String title;
    private String content;
    private int likeNumber;
    private long answerNumber;
    private UUID userId;
    private MemberTypeEnum memberType;
    private UserLifeInfo userLifeInfo;
    private String topic;
    private Instant createdAt;
}
