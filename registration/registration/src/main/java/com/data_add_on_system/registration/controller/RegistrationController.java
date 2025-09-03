package com.data_add_on_system.registration.controller;

import com.data_add_on_system.registration.appConstants.Messages;
import com.data_add_on_system.registration.pojos.Otp;
import com.data_add_on_system.registration.pojos.User;
import com.data_add_on_system.registration.service.OTPSender;
import com.data_add_on_system.registration.service.RegistrationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CurrencyEditor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class RegistrationController {
        Logger LOGGER = LoggerFactory.getLogger(RegistrationController.class);
    @Autowired
    private RegistrationService service;
    @Autowired
    private OTPSender sender;

    private User currentUser;
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String register(@RequestBody User user){
       service.verifyOtp(user);
        currentUser = user;

        return "otp sent to mail and mobile";

    }
    @RequestMapping(value = "/verifyOtp" , method = RequestMethod.POST)
    public Messages getOtp(@RequestBody Otp otp){

        if(service.registerUser(currentUser,otp.getOtp())){
            return Messages.USER_SAVED_SUCCESSFULLY;
        }

        return Messages.FAILED_TO_SAVE_USER;
    }
}
