package lt.code.academy.garagebuddiesapi.data;

import org.bson.types.ObjectId;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

public class RepairBooking {
    private UUID id;
    private RepairType repairType;
    private ObjectId customerId;
    private ObjectId garageId;
    private UUID workPlaceId;
    private String CarRegistrationNumber;
    private String additionalComments;
    private LocalDateTime dateRegistrationWasCreated;
    private LocalDateTime DateTimeOfArrival;
}
