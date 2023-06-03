package com.hanyu.hanyube.service.entities;

import com.hanyu.hanyube.domain.enums.CommentStatusEnum;
import com.hanyu.hanyube.domain.enums.MemberTypeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@Table(name = "hu_comment")
@Entity
public class CommentEntity {
    @PrePersist
    public void autofill() {
        if (this.getId() == null) {
            this.setId(UUID.randomUUID());
        }
    }

    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Builder.Default
    @Column(name = "parent_id")
    private UUID parentId = null;

    @Builder.Default
    @Column(name = "like_number")
    private int likeNumber = 0;

    @Builder.Default
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private CommentStatusEnum status = CommentStatusEnum.AVAILABLE;

    @Builder.Default
    @Column(name = "member_type")
    @Enumerated(EnumType.STRING)
    private MemberTypeEnum memberType = MemberTypeEnum.NEW_MEMBER;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
