package com.data_add_on_system.login_service.pojo;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "credentials")
public class Creds {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    @JoinColumn(name = "user_id", unique = true)
    @JsonIgnore
    private User user;
    private String email;
    private String password;



    public String toString(){
        return this.password;
    }
}
