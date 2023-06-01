package com.hanyu.hanyube.service.utils;

import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

public class MapUtils {
    public static Map<String, Object> stripNullValue(Map<String, Object> convertValue) {
        Set var10000 = convertValue.entrySet()
                .stream()
                .filter((entry) -> entry.getValue() == null)
                .map(Map.Entry::getKey)
                .collect(Collectors.toSet());
        Objects.requireNonNull(convertValue);
        var10000.forEach(convertValue::remove);
        return convertValue;
    }
}
