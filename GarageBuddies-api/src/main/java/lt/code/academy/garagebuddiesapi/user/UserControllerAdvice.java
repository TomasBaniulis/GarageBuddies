package lt.code.academy.garagebuddiesapi.user;

import lt.code.academy.garagebuddiesapi.user.exception.BusyUsernameException;
import lt.code.academy.garagebuddiesapi.user.exception.UserDoesNotExistRunTimeException;
import lt.code.academy.garagebuddiesapi.user.exception.UserExceptionResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "lt.code.academy.garagebuddiesapi.user")
public class UserControllerAdvice {
    @ExceptionHandler(UserDoesNotExistRunTimeException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public UserExceptionResponse handleUserDoesNotExistRunTimeException (UserDoesNotExistRunTimeException exception){
        return new UserExceptionResponse( String.format("User does not exist with this id"), HttpStatus.NOT_FOUND);
    }

//    @ExceptionHandler(Exception.class)
//    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
//    public UserExceptionResponse handelUserException (Exception exception){
//        return new UserExceptionResponse(exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//    }

    @ExceptionHandler(BusyUsernameException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public UserExceptionResponse handleBusyUsernameException (BusyUsernameException exception){
        return new UserExceptionResponse("User name busy", HttpStatus.BAD_REQUEST, exception.getReason());

    }
}
