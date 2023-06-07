package com.hanyu.hanyube.service.features.test;

import com.hanyu.hanyube.service.entities.TestResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface TestResultRepository extends JpaRepository<TestResultEntity, Long> {

    List<TestResultEntity> findByUserId(final UUID userId);
}
