package lt.code.academy.garagebuddiesapi.user.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.bson.types.ObjectId;

@Getter
@AllArgsConstructor
public class UserDoesNotExistRunTimeException extends RuntimeException {
    private final ObjectId id;
}
