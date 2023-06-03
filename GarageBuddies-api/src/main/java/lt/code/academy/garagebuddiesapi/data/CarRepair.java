package lt.code.academy.garagebuddiesapi.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

import java.time.LocalDate;
import java.util.UUID;
@NoArgsConstructor
@Setter
@Getter
public class CarRepair {
    ObjectId id;
    RepairType repairType;
    ObjectId carRepairShopId;
    UUID workPlaceId;
    LocalDate date;
    Integer mileage;
    String warranty;
    String repairComment;
}
