package com.hanyu.hanyube.service.entities;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@Table(name = "hu_user_like_map")
@Entity
public class UserLikeEntity {

    @PrePersist
    public void autofill() {
        if (this.getId() == null) {
            this.setId(UUID.randomUUID());
        }
    }

    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name="user_id")
    private UUID userId;

    @Column(name="comment_id")
    private UUID commentId;

}
