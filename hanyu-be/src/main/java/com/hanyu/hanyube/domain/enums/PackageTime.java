package com.hanyu.hanyube.domain.enums;

public enum PackageTime {
    QUARTER(90), YEAR(365), LIFETIME(0);
    private final long time;
    PackageTime(long time) {
        this.time = time;
    }
    public long getTime() {
        return time;
    }
}
