package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

import java.time.LocalDate;
import java.util.UUID;
@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
public class Evaluation {

    private ObjectId id;
    private Integer evaluation ;
    private ObjectId userId;
    private LocalDate date;
}