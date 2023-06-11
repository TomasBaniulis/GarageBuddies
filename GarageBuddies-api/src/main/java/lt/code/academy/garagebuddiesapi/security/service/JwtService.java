package lt.code.academy.garagebuddiesapi.security.service;

import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Service
public class JwtService {

    public String generateSecretKey (){
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.ES512);
        return Encoders.BASE64.encode(secretKey.getEncoded());

    }


}
