package com.hanyu.hanyube.config.security.filters;

import com.hanyu.hanyube.service.entities.UserEntity;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import com.hanyu.hanyube.service.features.user.UserService;
import com.hanyu.hanyube.service.utils.JwtUtils;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.html.parser.Entity;
import java.io.IOException;


@Slf4j
@Service
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtUtils jwtUtil;
    private final UserService userDetailService;
    private final SecurityConfigProperties configProperties;

    @Override
    protected void doFilterInternal(@NonNull HttpServletRequest httpServletRequest,
                                    @NonNull HttpServletResponse httpServletResponse,
                                    @NonNull FilterChain filterChain) throws ServletException, IOException {

        if (isExcludedPattern(httpServletRequest.getRequestURI().substring(9))) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }
        String authorizationHeader = httpServletRequest.getHeader("Authorization");
        if (authorizationHeader == null || authorizationHeader.isEmpty()) {
            throw new BadRequestException("Token is missing!");
        }
        if (authorizationHeader.startsWith("Bearer")) {
            authorizationHeader = authorizationHeader.split(" ")[1];
        }

        final String token = authorizationHeader.trim();
        if (!jwtUtil.validate(token)) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }
        String email = jwtUtil.getEmail(token);
        var validUser = (UserEntity) userDetailService.loadUserByUsername(email);
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(
                        validUser.getId(),
                        validUser.getPassword(),
                        validUser.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }


    private boolean isExcludedPattern(String requestUri) {
        for (String excludedPattern : configProperties.getPath()) {
            if (new AntPathMatcher().match(excludedPattern, requestUri)) {
                return true;
            }
        }
        return false;
    }
}
