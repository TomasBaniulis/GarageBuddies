package lt.code.academy.garagebuddiesapi.data;

import org.bson.types.ObjectId;

import java.util.List;
import java.util.Set;
import java.util.UUID;

public class WorkPlace {
    private UUID id;
    private List<String> possibleRepairs;
    Set<RepairBooking> allBookings;
}