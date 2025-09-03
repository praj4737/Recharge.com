package com.data_add_on_system.login_service.pojo;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.naming.Name;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "user_plans")
public class UserPlans {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne()
    @JoinColumn(name = "userId")
    @JsonIgnore
    private User user;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "planId")
    private RechargePlan plan;
    private double remainingData;
    private double remainingSms;
    private double remainingTalktime;
    private boolean status;
    private LocalDate startDate;
    private LocalDate endDate;
}