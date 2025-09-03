package com.data_add_on_system.payments.controller;
import com.data_add_on_system.payments.dto.PaymentsDto;
import com.data_add_on_system.payments.pojo.Payments;
import com.data_add_on_system.payments.pojo.RechargePlan;
import com.data_add_on_system.payments.pojo.User;
import com.data_add_on_system.payments.pojo.UserPlans;
import com.data_add_on_system.payments.response.Messages;
import com.data_add_on_system.payments.response.PaymentsResponse;
import com.data_add_on_system.payments.service.JwtUtil;
import com.data_add_on_system.payments.service.PaymentsService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
public class PaymentsController {
    @Autowired
    private PaymentsService service;
    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping(value = "/payments" , method = RequestMethod.POST)
    public PaymentsResponse payments(@RequestBody PaymentsDto user, HttpServletRequest request){
        PaymentsResponse response = new PaymentsResponse();
        System.out.println(user.getUser());
        System.out.println(user.getPaymentType());
        System.out.println(user);
        System.out.println(user.getAmount());
        System.out.println(user.getPlans().getName());
        System.out.println(user.getPlans().getDescription());
        String authHeader = request.getHeader("Authorization");
        String token = authHeader.substring(7);
        if(!jwtUtil.validateToken(token)){
            response.setCode(300);
            response.setMsg(Messages.PAYMENT_FAILED);
            response.setError(null);
            response.setPayments(null);

        }

        return service.createPayment(user);

    }
}
