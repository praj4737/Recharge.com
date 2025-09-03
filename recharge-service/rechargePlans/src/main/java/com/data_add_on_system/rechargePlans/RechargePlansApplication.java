package com.data_add_on_system.rechargePlans;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class RechargePlansApplication {

	public static void main(String[] args) {
		SpringApplication.run(RechargePlansApplication.class, args);
	}

}
