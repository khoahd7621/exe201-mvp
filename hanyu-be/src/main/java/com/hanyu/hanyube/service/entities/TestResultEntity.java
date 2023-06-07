package com.hanyu.hanyube.service.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "hu_test_result")
@Entity
public class TestResultEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "test_id")
    private int testId;

    @Column(name = "total_score")
    @Builder.Default
    private int totalScore = 0;

    @Column(name = "real_score")
    private int realScore = 0;

    @Column(name = "created_at")
    private Instant createdAt = Instant.now();
}
