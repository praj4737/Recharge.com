package com.data_add_on_system.login_service.repository;

import com.data_add_on_system.login_service.pojo.Creds;

import com.data_add_on_system.login_service.pojo.User;
import com.data_add_on_system.login_service.response.LoginResponse;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LoginDao {

    @PersistenceContext
    private EntityManager manager;

    public LoginResponse getUser(Creds creds, LoginResponse response){
        String jpql = "SELECT c.user FROM Creds c WHERE c.email = :email AND c.password = :password";
        TypedQuery<User> query = manager.createQuery(jpql, User.class)
                .setParameter("email", creds.getEmail())
                .setParameter("password", creds.getPassword());
        User user = query.getSingleResult();
        if(user !=null) {
            response.setCode(200);
            response.setMsg("Logged In Successfully");
            response.setError(null);
            response.setData(user);
        }else
        {
            response.setCode(300);
            response.setMsg("Logg In failed");
            response.setMsg("Logg In failed");
            response.setError("Not Found In database");
            response.setData(null);
        }
        return response;
    }
    public List<Object> getUserPlans(String email){
        Query query = manager.createNativeQuery("select r.*,u.* from recharge_plans r join user_plans u on u.plan_id = r.id where u.user_id=(select u.user_id from user_details u join \n" +
                "contact_details c on u.contact_id = c.id where c.email ='"+email+"');");
        List<Object> list = null;
        try{
            list = query.getResultList();
        }catch (Exception e){
            e.printStackTrace();
        }

        return list;
    }
}
