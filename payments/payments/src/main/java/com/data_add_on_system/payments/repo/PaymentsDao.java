package com.data_add_on_system.payments.repo;

import com.data_add_on_system.payments.dto.PaymentsDto;
import com.data_add_on_system.payments.pojo.Payments;
import com.data_add_on_system.payments.pojo.User;
import com.data_add_on_system.payments.response.Messages;
import com.data_add_on_system.payments.response.PaymentsResponse;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
public class PaymentsDao {
    @PersistenceContext
    private EntityManager manager;

    @Transactional
    public PaymentsResponse savePayment(User user, PaymentsResponse response){

        try {
            manager.merge(user);
        }catch (Exception e){
            response.setCode(300);
            response.setPayments(null);
            response.setMsg(Messages.PAYMENT_FAILED);
            response.setError(e.getMessage());
            e.printStackTrace();
        }
        response.setCode(200);
        response.setPayments(null);
        response.setMsg(Messages.PAYMENT_DONE_SUCCESSFULLY);
        response.setError(null);

        return response;
    }

}















