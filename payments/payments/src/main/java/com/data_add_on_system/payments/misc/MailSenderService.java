package com.data_add_on_system.payments.misc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailSenderService {
    private JavaMailSender sender;
    @Autowired
    public MailSenderService(JavaMailSender sender){
        this.sender = sender;
    }
    public MailSenderService(){

    }



    public boolean sendMail(String to, String subject, String content){

        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo(to);
            mail.setSubject(subject);
            mail.setText(content);

            sender.send(mail);
        }catch (MailException me){
            me.printStackTrace();
            return false;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }

        return true;

    }
}
