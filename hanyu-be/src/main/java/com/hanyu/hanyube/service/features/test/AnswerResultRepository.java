package com.hanyu.hanyube.service.features.test;

import com.hanyu.hanyube.service.entities.UserAnswerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnswerResultRepository extends JpaRepository<UserAnswerEntity, Long> {
    List<UserAnswerEntity> findByTestResultId(final long testId);
}
