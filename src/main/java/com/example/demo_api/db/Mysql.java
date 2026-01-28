package com.example.demo_api.db;

import javax.sql.DataSource;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import io.github.cdimascio.dotenv.Dotenv;

@Configuration
class Mysql {

    private final Dotenv dotenv = Dotenv.load();

    @Bean
    public DataSource dataSource(){
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(dotenv.get("MYSQLURL"));
        config.setUsername(dotenv.get("MYSQLUSER"));
        config.setPassword(dotenv.get("MYSQLPASSWORD"));

        config.setMaximumPoolSize(10);
        config.setMinimumIdle(3); //cantidad minimas de conexiones con la db
        config.addDataSourceProperty("cachePrepStmts", "true"); //guarda la sentencia de los queries para una mayor velocidad
        config.addDataSourceProperty("prepStmtCacheSize", "100"); //cantidad de las ultimas sentencias para recordar 

        return new HikariDataSource(config);
    }

}
