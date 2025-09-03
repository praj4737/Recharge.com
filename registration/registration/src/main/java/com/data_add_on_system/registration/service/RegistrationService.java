package com.data_add_on_system.registration.service;

import com.data_add_on_system.registration.appConstants.Messages;
import com.data_add_on_system.registration.misc.OTPGenerator;
import com.data_add_on_system.registration.pojos.*;
import com.data_add_on_system.registration.repository.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
@Autowired
private UserDao dao;
@Autowired
private OTPSender sender;
@Autowired
private MailSenderService msender;

private static String otp;
    public boolean registerUser(User user, String userOtp){

        if(null == user){
            return false;
        }
        if(user.getLname().isEmpty() || user.getFname().isEmpty() || user.getDob() == null || user.getStartDate() == null){
            return false;
        }
        if(!otp.equals(userOtp)){
            return false;
        }
        //setting user for address creds and contact as well

        user.getAddress().setUser(user);
        user.getContact().setUser(user);
        user.getCreds().setUser(user);

        Creds creds = user.getCreds();
        Contact contact = user.getContact();
        creds.setEmail(contact.getEmail());
        user.setCreds(creds);

        return dao.saveUser(user);
    }
    public void verifyOtp(User user){
         otp = OTPGenerator.generateOtp();

        verifyNumber(user.getContact().getRegisteredMobileNumber(),otp);

        verifyMail(user.getContact().getEmail(), Messages.OTP_SENT.getMsg(), otp);
    }
    public boolean verifyNumber(String number,String otp){
        return sender.sendOtp(number, otp);
    }
    public boolean verifyMail(String to, String subject, String content){
        return msender.sendMail(to,subject,content);
    }
}
