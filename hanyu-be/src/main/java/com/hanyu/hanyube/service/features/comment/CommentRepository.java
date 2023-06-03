package com.hanyu.hanyube.service.features.comment;

import com.hanyu.hanyube.domain.dto.comment.CommentResponse;
import com.hanyu.hanyube.domain.enums.CommentStatusEnum;
import com.hanyu.hanyube.service.entities.CommentEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, UUID> {

    Page<CommentEntity> findAllByStatusAndParentIdIsNull(final CommentStatusEnum status, Pageable pageable);
    List<CommentEntity> findAllByStatusAndParentIdIsNull(final CommentStatusEnum status);
    Optional<CommentEntity> findByIdAndStatus(final UUID id, final CommentStatusEnum status);

    @Query(value = " Select count(*) from hu_comment hc where hc.parent_id = :rootId", nativeQuery = true)
    long countByRootId(@Param("rootId") UUID rootId);

    List<CommentEntity> findByParentIdAndStatus(final UUID parentId, final CommentStatusEnum status);

}
