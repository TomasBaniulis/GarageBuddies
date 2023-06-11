package lt.code.academy.garagebuddiesapi.security;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static lt.code.academy.garagebuddiesapi.EndPoint.LOGIN;
@RestController
@RequestMapping(LOGIN)
public class LoginController {
    @PostMapping
    public  void login(){}


}



