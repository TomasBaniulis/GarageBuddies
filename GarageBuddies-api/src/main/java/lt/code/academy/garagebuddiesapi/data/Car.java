package lt.code.academy.garagebuddiesapi.data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.bson.types.ObjectId;

import java.time.LocalDate;
import java.util.Set;

@NoArgsConstructor
@Setter
@Getter
public class Car {
    private ObjectId id;
    private String vinCode;
    private String manufacturer;
    private String model;
    private Integer engineCapacity;
    private String engineCode;
    private Fuel fuel;
    private Integer power;
    private Transmission transmission;
    private Drivetrain drivetrain;
    private Boolean aerConditioning;
    private LocalDate manufacturingDate;
    private LocalDate techDate;
    private Integer mileage;
    private Set<CarRepair> repairHistory;
    private NextEngineOilChange nextEngineOilChange;
    private NextTransmissionOilChange nextTransmissionOilChange;

}