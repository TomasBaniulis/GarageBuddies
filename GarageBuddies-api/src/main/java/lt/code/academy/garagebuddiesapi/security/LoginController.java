package lt.code.academy.garagebuddiesapi.security;

import lombok.RequiredArgsConstructor;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import lt.code.academy.garagebuddiesapi.user.service.UserService;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static lt.code.academy.garagebuddiesapi.EndPoint.LOGIN;
@RequiredArgsConstructor
@RestController
@RequestMapping(LOGIN)
public class LoginController {

    private final UserService userService;


    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginUser login(@AuthenticationPrincipal User user){
        return new LoginUser(user);
    }


}



