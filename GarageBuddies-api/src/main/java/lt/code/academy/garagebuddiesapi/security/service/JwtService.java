package lt.code.academy.garagebuddiesapi.security.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lt.code.academy.garagebuddiesapi.security.exception.InvalidTokenException;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JwtService {

    private final byte[] secretKey;
    private final long tokenValidMs;

    public JwtService(@Value("${security.jwt.secret.key}") byte [] secretKey, @Value("#{${security.jwt.valid.mi} * 60000 }") long tokenValidMs){
        this.secretKey = secretKey;
        this.tokenValidMs = tokenValidMs;
    }

    public String createToken (User user){
        Date date = new Date();
        return Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setAudience("GarageBuddies-ui")
                .setIssuer("GarageBuddies-api")
                .setIssuedAt(date)
                .setExpiration(new Date(date.getTime() + tokenValidMs))
                .setSubject(user.getUsername())
                .claim("roles", user.getRoles())
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();

    }

    public Authentication parseToken(String token){
        try {
            JwtParser jwtParser = Jwts.parserBuilder().setSigningKey(secretKey).build();

            Jwt<Header, Claims> headerClaimsJwt = jwtParser.parseClaimsJwt(token);
            Claims body = headerClaimsJwt.getBody();

            String username = body.getSubject();
            List<SimpleGrantedAuthority> roles = ((List<String>) body.get("roles")).stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());

            return new UsernamePasswordAuthenticationToken(username, null, roles);
        }catch (Exception e){
            throw new InvalidTokenException();

        }
    }

    private String generateSecretKey (){
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS512);
        return Encoders.BASE64.encode(secretKey.getEncoded());

    }


}
