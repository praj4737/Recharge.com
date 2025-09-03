package com.data_add_on_system.login_service.pojo;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_details")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @NotNull
    private String fname;
    @NotNull
    private String lname;
    @NotNull
    private LocalDate dob;
    @NotNull
    private boolean status;
    @NotNull
    private LocalDate startDate;
    private LocalDate endDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "contact_id")
    private Contact contact;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cred_id")
    private Creds creds;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Payments> payments;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)

    private List<UserPlans> myPlans;

    private String token;

    public String toString(){
        return "name: "+this.fname+" lname: "+
                this.lname+" dob: "+this.dob+
                " status: "+this.status+" startDate: "+
                this.startDate+" address:"+this.getAddress()+" contact: "+this.getContact()+
                " creds: "+ this.getCreds();
    }
}
























