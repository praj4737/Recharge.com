package com.data_add_on_system.registration.repository;

import com.data_add_on_system.registration.pojos.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.PersistenceException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;

@Repository
public class UserDao {
    @PersistenceContext
    EntityManager manager;

    @Transactional
    public boolean saveUser(User user){

        try {
            manager.persist(user);
        }catch (PersistenceException pe){
            pe.printStackTrace();
            return false;
        }catch (Exception se){
            se.printStackTrace();
            return false;
        }

        return true;
    }
}
