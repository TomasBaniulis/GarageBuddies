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
    private String make;
    private String model;
    private Integer engineCapacity;
    private String fuel;
    private Integer power;
    private String transmission;
    private String drivetrain;
    private Boolean airConditioning;
    private LocalDate dateOfProduction;
    private LocalDate technicalInspectionDate;
    private Integer mileage;
    private Set<CarRepair> repairHistory;
    private NextEngineOilChange nextEngineOilChange;
    private NextTransmissionOilChange nextTransmissionOilChange;

}