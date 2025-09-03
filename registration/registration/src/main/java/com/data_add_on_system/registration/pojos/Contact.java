package com.data_add_on_system.registration.pojos;

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
@Table(name = "contact_details")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @NotNull
    private String email;
    @NotNull
    private String registeredMobileNumber;
    @NotNull
    private String alternateMobileNumber;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    public String toString(){
        return this.registeredMobileNumber+" "+this.alternateMobileNumber+" "+this.email;
    }
}
