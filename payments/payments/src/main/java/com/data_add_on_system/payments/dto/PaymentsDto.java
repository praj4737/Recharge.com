package com.data_add_on_system.payments.dto;

import com.data_add_on_system.payments.pojo.Payments;
import com.data_add_on_system.payments.pojo.RechargePlan;
import com.data_add_on_system.payments.pojo.User;
import com.data_add_on_system.payments.pojo.UserPlans;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PaymentsDto {
    private User user;
    private String paymentType;
    private double amount;
    private RechargePlan plans;
}
