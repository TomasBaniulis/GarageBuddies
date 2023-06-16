package lt.code.academy.garagebuddiesapi.data;
import lombok.*;
import org.bson.types.ObjectId;

import java.time.LocalDate;
import java.util.Set;



@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Car {
    private ObjectId id;
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
    private LocalDate dateOfProduction;
    private LocalDate technicalInspectionDate;
    private Integer mileage;
    private Set<CarRepair> repairHistory;
    private NextEngineOilChange nextEngineOilChange;
    private NextTransmissionOilChange nextTransmissionOilChange;


    public Car(String vinCode, String registrationNumber, String make, String model, Integer engineCapacity, String fuel, Integer power, String transmission, String drivetrain, String airConditioning, LocalDate dateOfProduction, LocalDate technicalInspectionDate, Integer mileage, Set<CarRepair> repairHistory, NextEngineOilChange nextEngineOilChange, NextTransmissionOilChange nextTransmissionOilChange) {
        this.vinCode = vinCode;
        this.registrationNumber = registrationNumber;
        this.make = make;
        this.model = model;
        this.engineCapacity = engineCapacity;
        this.fuel = fuel;
        this.power = power;
        this.transmission = transmission;
        this.drivetrain = drivetrain;
        this.airConditioning = airConditioning;
        this.dateOfProduction = dateOfProduction;
        this.technicalInspectionDate = technicalInspectionDate;
        this.mileage = mileage;
        this.repairHistory = repairHistory;
        this.nextEngineOilChange = nextEngineOilChange;
        this.nextTransmissionOilChange = nextTransmissionOilChange;
    }


}

