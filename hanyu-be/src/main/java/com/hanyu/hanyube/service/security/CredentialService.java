package com.hanyu.hanyube.service.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CredentialService {

    private final PasswordEncoder passwordEncoder;

    public boolean checkPassword(final String password, final String encodedPassword) {
        return passwordEncoder.matches(password, encodedPassword);
    }
}
