package lt.code.academy.garagebuddiesapi.security.filter;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lt.code.academy.garagebuddiesapi.security.Login;
import lt.code.academy.garagebuddiesapi.security.service.JwtService;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.io.IOException;


public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final ObjectMapper mapper;
    private final JwtService jwtService;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtService jwtService) {
        super(authenticationManager);
        mapper = new ObjectMapper();
        this.jwtService = jwtService;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            Login login = mapper.readValue(request.getReader(), Login.class);
            Authentication authentication = new UsernamePasswordAuthenticationToken(login.username(), login.password());
            return getAuthenticationManager().authenticate(authentication);

    } catch (IOException e) {
        throw new BadCredentialsException("Wrong user credentials", e);
    }}

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityContextHolder.getContext().setAuthentication(authResult);

        String token = jwtService.createToken((User) authResult.getPrincipal());
        response.addHeader("Authentication", token);

        chain.doFilter(request,response);
    }
}

