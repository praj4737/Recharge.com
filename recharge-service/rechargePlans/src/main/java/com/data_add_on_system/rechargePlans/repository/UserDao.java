package com.data_add_on_system.rechargePlans.repository;

import com.data_add_on_system.rechargePlans.pojo.User;
import com.data_add_on_system.rechargePlans.response.Messages;
import com.data_add_on_system.rechargePlans.response.UserResponse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
    @PersistenceContext
    private EntityManager manager;

    public UserResponse getUser(User user , UserResponse response){
        User updatedUser = null;
        TypedQuery<User> query = manager.createQuery("FROM User where userId = "+user.getUserId()+"", User.class);
        updatedUser = query.getSingleResult();
        if(updatedUser == null){
            response.setCode(300);
            response.setData(null);
            response.setMsg(Messages.USER_IS_NULL);
            response.setError("user cannnot be null");
        }

        response.setMsg(Messages.USER_FETCHED_SUCCESSFULLY);
        response.setCode(200);
        response.setData(updatedUser);
        response.setError(null);
       return response;

    }
}
