package com.hanyu.hanyube.service.utils;

import com.aventrix.jnanoid.jnanoid.NanoIdUtils;

public final class NanoIdGenerator {
    private static final char[] DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".toCharArray();

    public static String randomId() {
        return NanoIdUtils.randomNanoId(NanoIdUtils.DEFAULT_NUMBER_GENERATOR, DEFAULT_ALPHABET, 21);
    }
}
