package lt.code.academy.garagebuddiesapi.config;

import lt.code.academy.garagebuddiesapi.security.filter.JwtAuthenticationFilter;
import lt.code.academy.garagebuddiesapi.security.filter.JwtAuthorisationFilter;
import lt.code.academy.garagebuddiesapi.security.service.JwtService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFilter;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;

@Configuration
@EnableMethodSecurity(securedEnabled = true, jsr250Enabled = true)
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain (HttpSecurity security, AuthenticationConfiguration authenticationConfiguration, JwtService jwtService) throws Exception{

        security
                .csrf()
                    .disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                    .authorizeHttpRequests()
                    .requestMatchers(HttpMethod.POST, "/users", "/login")
                        .permitAll()
                    .anyRequest()
                    .authenticated()
                .and().exceptionHandling().authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                .and()
                .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager(), jwtService))
                .addFilter(new JwtAuthorisationFilter(authenticationConfiguration.getAuthenticationManager(), jwtService));



        return security.build();
    }
}
