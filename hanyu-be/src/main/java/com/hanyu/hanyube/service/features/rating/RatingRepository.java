package com.hanyu.hanyube.service.features.rating;

import com.hanyu.hanyube.service.entities.RatingEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface RatingRepository extends JpaRepository<RatingEntity, UUID> {
    Optional<RatingEntity> findByUserId(UUID userId);
}
