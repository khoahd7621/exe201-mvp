package com.hanyu.hanyube.service.utils;

import com.hanyu.hanyube.domain.dto.login.TokenClaim;
import com.hanyu.hanyube.service.exceptions.BadRequestException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

@Service
public class JwtUtils {

    private final static String key = "50655368566D597133743677397A24432646294A404D635166546A576E5A7234";

    public String generate(String username, TokenClaim tokenClaim) {
        var claims = new HashMap<String, Object>();
        claims.put("tokenClaims", tokenClaim);
        return Jwts.builder()
                .addClaims(claims)
                .setSubject(username)
                .setIssuer("hanyu-dev.com")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
                .signWith(generateKey())
                .compact();
    }

    private Key generateKey() {
        byte[] keyBytes = Decoders.BASE64.decode(key);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean validate(String token) {
        return getEmail(token) != null && !isExpired(token);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String getEmail(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isExpired(String token) {
        if (extractClaim(token, Claims::getExpiration).before(new Date())){
            throw new BadRequestException("Token Is Expired");
        }
        return false;
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public TokenClaim getTokenClaims(String token) {
        return (TokenClaim) extractAllClaims(token).get("tokenClaims");
    }
}
