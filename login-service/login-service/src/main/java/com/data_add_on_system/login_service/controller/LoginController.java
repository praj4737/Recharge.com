package com.data_add_on_system.login_service.controller;

import com.data_add_on_system.login_service.pojo.Creds;

import com.data_add_on_system.login_service.response.LoginResponse;
import com.data_add_on_system.login_service.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class LoginController {
    @Autowired
    private LoginService service;
    @RequestMapping(value = "/login" , method = RequestMethod.POST)
    public LoginResponse test(@RequestBody Creds creds){


        return service.login(creds);
    }


}
