package lt.code.academy.garagebuddiesapi.user.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.time.ZoneId;

@Getter
public class UserExceptionResponse {
    private final String message;
    private final  int status;
    private final  long timeStamp;

    public UserExceptionResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status.value();
        timeStamp = LocalDateTime.now().atZone(ZoneId.systemDefault()).toEpochSecond();
    }
}
