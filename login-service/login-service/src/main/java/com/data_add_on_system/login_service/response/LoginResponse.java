package com.data_add_on_system.login_service.response;

import com.data_add_on_system.login_service.pojo.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginResponse {

    private int code;
    private String msg;
    private User data;
    private String error;
}