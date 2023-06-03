package lt.code.academy.garagebuddiesapi.data;

import org.bson.types.ObjectId;
import java.util.Set;

public class WorkPlace {
    private ObjectId id;
    private Set<RepairType> possibleRepairs;
    Set<RepairBooking> allBookings;
}