package com.hanyu.hanyube.config.security;

import com.hanyu.hanyube.domain.dto.login.TokenClaim;
import com.hanyu.hanyube.domain.enums.UserRoleEnum;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

public class JwtUserDetails implements UserDetails {

    private final TokenClaim claim;

    private final List<GrantedAuthority> authorities;

    public JwtUserDetails(final TokenClaim claim) {
        this.authorities = AuthorityUtils.createAuthorityList(
                Stream.of(claim.getUserRole())
                        .map(UserRoleEnum::toString)
                        .toList().toArray(String[]::new));
        this.claim = claim;
    }

    public TokenClaim getTokenClaim() {
        return claim;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.unmodifiableCollection(authorities);
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return claim.getUserId().toString();
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
        return true;
    }
}
