package com.data_add_on_system.rechargePlans.response;

import com.data_add_on_system.rechargePlans.pojo.RechargePlan;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RechargeResponse {
    private int code;
    private List<RechargePlan> data;
    private Messages msg;
    private String error;
}
