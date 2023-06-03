package com.hanyu.hanyube.domain.constants;

import lombok.Getter;

@Getter
public class ErrorCodeConstants {

    /*App Error Code Constant*/
    public static final String INTERNAL_SERVER_ERROR = "Internal server error";
    public static final String TOKEN_IS_MISSING = "Token must be have";
    /*App Error Code Constant*/

    /*User Error Code*/
    public static final String USER_NOT_FOUND = "User %s not found";
    public static final String USER_ALREADY_EXISTED = "User %s is already existed!";
    public static final String MISSING_PERMISSION = "You do not have permission!";
    public static final String ACCOUNT_NOT_EXIST = "Your account %s not exist!";
    /*User Error Code*/
}
