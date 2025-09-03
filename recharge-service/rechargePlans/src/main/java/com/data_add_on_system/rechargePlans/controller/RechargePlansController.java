package com.data_add_on_system.rechargePlans.controller;

import com.data_add_on_system.rechargePlans.pojo.RechargePlan;
import com.data_add_on_system.rechargePlans.pojo.User;
import com.data_add_on_system.rechargePlans.response.RechargeResponse;
import com.data_add_on_system.rechargePlans.response.UserResponse;
import com.data_add_on_system.rechargePlans.service.RechargeService;
import com.data_add_on_system.rechargePlans.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class RechargePlansController {
    @Autowired
    private RechargeService service;
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/rechargePlans", method = RequestMethod.GET)
    public RechargeResponse getRechargePlans(){

        return service.getRecharges();
    }
    @RequestMapping(value = "/getUpdatedUser" , method = RequestMethod.POST)
    public UserResponse getUser(@RequestBody User user){

        return  userService.getUser(user);
    }
}
