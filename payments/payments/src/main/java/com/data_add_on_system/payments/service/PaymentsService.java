package com.data_add_on_system.payments.service;

import com.data_add_on_system.payments.dto.PaymentsDto;
import com.data_add_on_system.payments.misc.MailSenderService;
import com.data_add_on_system.payments.misc.OTPSender;
import com.data_add_on_system.payments.pojo.*;
import com.data_add_on_system.payments.repo.PaymentsDao;
import com.data_add_on_system.payments.response.Messages;
import com.data_add_on_system.payments.response.PaymentsResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Service
public class PaymentsService {
    @Autowired
    private PaymentsDao dao;
    @Autowired
    private MailSenderService mservice;
    @Autowired
    private OTPSender smssender;

    public PaymentsResponse createPayment(PaymentsDto paymentdto){
        UserPlans userPlans = new UserPlans();
        Payments payments = new Payments();
        User user = paymentdto.getUser();
        Creds creds = user.getCreds();
        creds.setUser(user);
        user.setCreds(creds);
        PaymentsResponse response = new PaymentsResponse();


        payments.setPaymentDate(LocalDate.now());
        payments.setPaymentTime(LocalTime.now());
        payments.setAmount(paymentdto.getAmount());
        payments.setStatus(true);
        payments.setUser(user);
        payments.setPaymentType(paymentdto.getPaymentType());
        payments.setStatus(true);
        //payments.setUserId();
        //setting user plans:
        userPlans.setPlan(paymentdto.getPlans());
        userPlans.setUser(user);
        userPlans.setStatus(true);
        userPlans.setRemainingData(paymentdto.getPlans().getDataAtHighSpeed());
        userPlans.setStartDate(LocalDate.now());
        userPlans.setRemainingTalktime(1000);
        userPlans.setRemainingSms(100);

        if(payments == null){
            response.setPayments(null);
            response.setMsg(Messages.PAYMENT_DETAILS_MISSING);
            response.setError("details missing in payment");
            response.setCode(300);
        }
        List<Payments> payments_list = new LinkedList<>();
        List<UserPlans> plans = new LinkedList<>();
        plans.add(userPlans);
        payments_list.add(payments);
        user.setPayments(payments_list);
        user.setMyPlans(plans);

        response = dao.savePayment(user,response);
        if(response.getCode() == 200){
            sendMail(user.getContact().getRegisteredMobileNumber(),"recharge successful for your mobile number "+user.getContact().getRegisteredMobileNumber()+"\nBenifits:\n Data: "+userPlans.getRemainingData()+"GB/Day \n Talktime: "+userPlans.getRemainingTalktime()+"mins\n"+" SMS: "+userPlans.getRemainingSms()+"\n Thank you for choosing Recharge.com");
            sendSms(user.getContact().getEmail(),"recharge successful","recharge successful for your mobile number "+user.getContact().getRegisteredMobileNumber()+"\nBenifits:\n Data: "+userPlans.getRemainingData()+"GB/Day \n Talktime: "+userPlans.getRemainingTalktime()+"mins\n"+" SMS: "+userPlans.getRemainingSms()+"\n Thank you for choosing Recharge.com");
        }


        return response;
    }
    public void sendMail(String recieptPhoneNumber, String content){
        smssender.sendSms(recieptPhoneNumber, content);
    }
    public void sendSms(String to, String subject, String content){
        mservice.sendMail(to,subject,content);
    }
}















