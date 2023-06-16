package lt.code.academy.garagebuddiesapi.data;

import org.bson.types.ObjectId;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.util.UUID;

public class RepairBooking {
    private UUID id;
    private RepairType repairType;
    private ObjectId customerId;
    private ObjectId garageId;
    private String CarRegistrationNumber;
    private String additionalComments;
    private LocalDate date;
}
