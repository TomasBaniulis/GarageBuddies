package lt.code.academy.garagebuddiesapi.user.exception;

import lombok.Getter;

@Getter
public class BusyUsernameException extends RuntimeException{
    private static final String RESAON = "username.exist";

    public String gerReason (){
        return RESAON;
    }

}
