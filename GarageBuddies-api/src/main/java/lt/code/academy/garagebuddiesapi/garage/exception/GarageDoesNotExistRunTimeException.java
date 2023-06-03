package lt.code.academy.garagebuddiesapi.garage.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.bson.types.ObjectId;

@Getter
@AllArgsConstructor
public class GarageDoesNotExistRunTimeException extends RuntimeException {
    private final ObjectId id;
}
