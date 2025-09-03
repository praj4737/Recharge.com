package com.data_add_on_system.rechargePlans.service;

import com.data_add_on_system.rechargePlans.pojo.User;
import com.data_add_on_system.rechargePlans.repository.UserDao;
import com.data_add_on_system.rechargePlans.response.UserResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserDao dao;

    public UserResponse getUser(User user){
        UserResponse response = new UserResponse();

        return dao.getUser(user, response);

    }
}
