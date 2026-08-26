package br.edu.utfpr.pb.pw44s.server.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class WebSecurity {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) {
        http
                .csrf(AbstractHttpConfigurer::disable) // Desabilita CSRF para APIs REST
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                        // Todas as rotas sem necessidade de autenticação ou autorização
                );
        return http.build();
    }
}
