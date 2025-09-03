package com.data_add_on_system.rechargePlans.repository;


import com.data_add_on_system.rechargePlans.pojo.RechargePlan;
import com.data_add_on_system.rechargePlans.response.Messages;
import com.data_add_on_system.rechargePlans.response.RechargeResponse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RechargeDao {

    @PersistenceContext
    EntityManager manager;

    public RechargeResponse getRecharges(RechargeResponse response){

        TypedQuery<RechargePlan> query = manager.createQuery("from RechargePlan", RechargePlan.class);
        List<RechargePlan> plans = null;
        try {
             plans = query.getResultList();
        }catch (Exception e){
            response.setError(e.toString());
            response.setData(null);
            response.setCode(300);
            response.setMsg(Messages.CANNOT_FETCH_AT_THIS_MOMENT);
        }
        if(plans.size()>0 && plans!=null){
            response.setCode(200);
            response.setData(plans);
            response.setMsg(Messages.PLANS_FETCHED_SUCCESSFULLY);
            response.setError(null);
        }else{
            response.setCode(300);
            response.setData(null);
            response.setMsg(Messages.CANNOT_FETCH_AT_THIS_MOMENT);
            response.setError("some error occurred");
        }


        return response;
    }
}
