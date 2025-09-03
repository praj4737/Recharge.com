package com.data_add_on_system.rechargePlans.service;

import com.data_add_on_system.rechargePlans.pojo.RechargePlan;
import com.data_add_on_system.rechargePlans.pojo.User;
import com.data_add_on_system.rechargePlans.repository.RechargeDao;
import com.data_add_on_system.rechargePlans.response.RechargeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RechargeService {
    @Autowired
    private RechargeDao dao;

    public RechargeResponse getRecharges(){
        RechargeResponse response = new RechargeResponse();



        return dao.getRecharges(response);
    }
}
