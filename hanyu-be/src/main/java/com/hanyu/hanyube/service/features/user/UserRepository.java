package com.hanyu.hanyube.service.features.user;

import com.hanyu.hanyube.service.entities.UserEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, UUID> {
    Optional<UserEntity> findByEmail(String email);

    Page<UserEntity> findAll(Pageable pageable);

    boolean existsByEmail(String email);
}
