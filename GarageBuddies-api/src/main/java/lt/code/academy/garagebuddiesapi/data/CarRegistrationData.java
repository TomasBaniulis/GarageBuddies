package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class CarRegistrationData {
    private String vinCode;
    private String registrationNumber;
    private String make;
    private String model;
    private Integer engineCapacity;
    private String fuel;
    private Integer power;
    private String transmission;
    private String drivetrain;
    private String airConditioning;
    private Long dateOfProduction;
    private Long technicalInspectionDate;
    private Integer mileage;
}
