package lt.code.academy.garagebuddiesapi.user.exception;

import lombok.Getter;

@Getter
public class BusyUsernameException extends RuntimeException{
    private static final String REASON = "username.exist";

    public String getReason (){
        return REASON;
    }

}
