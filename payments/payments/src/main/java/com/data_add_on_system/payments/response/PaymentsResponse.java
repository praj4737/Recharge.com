package com.data_add_on_system.payments.response;

import com.data_add_on_system.payments.pojo.Payments;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentsResponse {
    private int code;
    private List<Payments> payments;
    private Messages msg;
    private String error;
}
