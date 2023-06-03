package com.hanyu.hanyube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class HanyuBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(HanyuBeApplication.class, args);
	}

}
