package com.data_add_on_system.rechargePlans.pojo;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "rechargePlans")
public class RechargePlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String Name;
    private String type;
    private int validity;
    private double dataAtHighSpeed;
    private int totalData;
    private String description;
    private String voice;
    private int sms;
    private int generationType;
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean status;
    private double price;


}
