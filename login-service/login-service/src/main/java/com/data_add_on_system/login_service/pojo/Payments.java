package com.data_add_on_system.login_service.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payments_details")
public class Payments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String paymentType;
    private double amount;
    private LocalDate paymentDate;
    private LocalTime paymentTime;
    private boolean status;
    @ManyToOne()
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
}
