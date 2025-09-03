package com.data_add_on_system.registration.misc;

import java.util.Random;

public class OTPGenerator {

    public static String generateOtp(){

        String number = "1234567890";
        char[] otp  = new char[4];
        Random rand = new Random();

        for(int i=0;i<4;i++){

            otp[i] = number.charAt(rand.nextInt(number.length()));
        }

        return String.valueOf(otp);
    }
}
