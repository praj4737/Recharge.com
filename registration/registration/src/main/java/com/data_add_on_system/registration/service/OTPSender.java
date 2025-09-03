package com.data_add_on_system.registration.service;

import com.data_add_on_system.registration.misc.OTPGenerator;
import com.twilio.exception.TwilioException;
import com.twilio.http.TwilioRestClient;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class OTPSender {
    @Value("${twilio.phoneNumber}")
    private String twilioPhoneNumber;
   // private String recieptPhoneNumber = "+918639322892";
    public final TwilioRestClient twilioRestClient;

    public OTPSender(@Value("${twilio.accountSid}") String accountSid,
                     @Value("${twilio.authToken}") String authToken){
        twilioRestClient = new TwilioRestClient.Builder(accountSid,authToken).build();
    }
    public boolean sendOtp(String recieptPhoneNumber,String otp){
        try {
            Message.creator(new PhoneNumber("+91"+recieptPhoneNumber), new PhoneNumber(twilioPhoneNumber), "your otp for registration is: " + otp
            ).create(twilioRestClient);
        }catch (TwilioException te){
            te.printStackTrace();
            return false;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }

        return true;
    }
}
