package com.hanyu.hanyube.service.entities;

import com.hanyu.hanyube.domain.enums.UserPackageEnum;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import com.hanyu.hanyube.domain.enums.UserStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;
import java.time.Instant;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
@Table(name = "hu_user")
@Entity
public class UserEntity implements UserDetails {
    public static final String[] IGNORED_UPDATED_FIELDS = {
            "id",
            "password",
            "status",
            "phone",
            "email",
            "role",
            "updatedAt"
    };

    @PrePersist
    public void autofill() {
        if (this.getId() == null) {
            this.setId(UUID.randomUUID());
        }
    }

    @Id
    @Column(name = "id")
    private UUID id;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private String phone;

    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "user_package")
    @Enumerated(EnumType.STRING)
    private UserPackageEnum userPackage = UserPackageEnum.BASIC;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private UserStatusEnum status = UserStatusEnum.INACTIVE;

    @Column(name = "short_description")
    private String shortDescription;

    @Column(name = "role")
    @Builder.Default
    @Enumerated(EnumType.STRING)
    private UserRoleEnum role = UserRoleEnum.USER;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at")
    private Instant updatedAt;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(this.role.getName()));
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return UserStatusEnum.ACTIVE.equals(status);
    }
}
