package com.hanyu.hanyube.service.features.test;

import com.hanyu.hanyube.service.entities.PartResultEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartResultRepository extends JpaRepository<PartResultEntity, Long> {
    List<PartResultEntity> findByTestResultId(long id);
}
