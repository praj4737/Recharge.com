package com.data_add_on_system.payments.pojo;

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
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private  User user;
}
