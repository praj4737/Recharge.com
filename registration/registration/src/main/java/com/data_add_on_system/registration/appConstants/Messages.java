package com.data_add_on_system.registration.appConstants;

public enum Messages {
    USER_SAVED_SUCCESSFULLY("user saved successfully."),
    FAILED_TO_SAVE_USER("failed to register try again."),
    OTP_SENT("OTP from Recharge.com for registration");

    String msg;

     Messages(){}

     Messages(String msg){
        this.msg = msg;
    }
    public String getMsg(){
         return this.msg;
    }

}
