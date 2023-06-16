package lt.code.academy.garagebuddiesapi.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

import java.util.UUID;

@NoArgsConstructor
@Setter
@Getter
public class Address {
    private UUID Id;
    private String buildingNumber;
    private String street;
    private String town;

}
