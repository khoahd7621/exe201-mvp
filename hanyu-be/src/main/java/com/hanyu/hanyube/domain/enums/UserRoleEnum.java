package com.hanyu.hanyube.domain.enums;

public enum UserRoleEnum {
    USER("ROLE_USER"), ADMIN("ROLE_ADMIN");
    private final String name;

    UserRoleEnum(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
