package com.project.an.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;
import java.beans.ConstructorProperties;

@Configuration
public class DataSourceConfig {

    @Autowired
    ApplicationContext applicationContext;

    @Bean //메서드가 빈(Bean)을 생성하여 스프링 컨테이너에 등록하는 역할
    @Primary //여러 개의 빈이 같은 타입을 갖고 있는 경우, 우선적으로 선택되는 빈
    @ConfigurationProperties("spring.datasource")
    public DataSource dataSource() { //데이터 소스를 생성하여 반환하는 메서드
        return DataSourceBuilder.create().type(HikariDataSource.class).build();
    }
}