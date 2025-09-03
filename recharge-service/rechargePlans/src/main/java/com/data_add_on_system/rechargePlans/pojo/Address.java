package com.data_add_on_system.rechargePlans.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

@Entity
@Table(name = "address_details")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    private String addressLine1;
    @NotNull
    private String addressLine2;
    @NotNull
    private String addressLine3;
    @NotNull
    private String pincode;
    @NotNull
    private String city;
    @NotNull
    private String state;
    @NotNull
    private String country;
    @NotNull
    private boolean status;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private  User user;


public String toString(){
    return this.getAddressLine1()+" "+this.getAddressLine2()+" "+this.getAddressLine3()+" "+
            this.getPincode()+" "+this.getCity()+" "+this.getState()+" "+this.getCountry();
}


}
