package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Set;
import java.util.UUID;
@AllArgsConstructor
public class WorkPlace {
    private String  id;
    private List<RepairType> possibleRepairs;
    Set<RepairBooking> allBookings;
}