package com.data_add_on_system.rechargePlans.response;

import com.data_add_on_system.rechargePlans.pojo.User;
import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {
    private int code;
    private Messages msg;
    private User data;
    private String error;
}
