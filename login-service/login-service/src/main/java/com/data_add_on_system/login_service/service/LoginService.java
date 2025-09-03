package com.data_add_on_system.login_service.service;


import com.data_add_on_system.login_service.pojo.Creds;

import com.data_add_on_system.login_service.pojo.User;
import com.data_add_on_system.login_service.repository.LoginDao;
import com.data_add_on_system.login_service.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginDao dao;

    public LoginResponse login(Creds creds){
        LoginResponse response = new LoginResponse();

        if(creds.getEmail().isEmpty() || creds.getPassword().isEmpty()){
            response.setCode(300);
            response.setError("Invalid or Empty Login Details.");
            response.setData(null);
            response.setMsg("Login Failed");
        }

        return dao.getUser(creds, response);
    }
}
