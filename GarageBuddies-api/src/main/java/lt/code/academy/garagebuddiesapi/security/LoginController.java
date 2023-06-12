package lt.code.academy.garagebuddiesapi.security;

import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.print.attribute.standard.Media;

import static lt.code.academy.garagebuddiesapi.EndPoint.LOGIN;
@RestController
@RequestMapping(LOGIN)
public class LoginController {
    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginUser login(@AuthenticationPrincipal User user){
        return new LoginUser(user);
    }


}



