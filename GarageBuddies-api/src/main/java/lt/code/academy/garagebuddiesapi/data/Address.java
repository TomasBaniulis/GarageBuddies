package lt.code.academy.garagebuddiesapi.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

@NoArgsConstructor
@Setter
@Getter
public class Address {
    private ObjectId Id;
    private String buildingNumber;
    private String flatNumber;
    private String street;
    private String town;
    private String postCode;

}
