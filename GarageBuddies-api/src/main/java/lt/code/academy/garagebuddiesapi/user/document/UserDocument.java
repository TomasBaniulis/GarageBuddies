package lt.code.academy.garagebuddiesapi.user.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.RepairBooking;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.data.Address;
import lt.code.academy.garagebuddiesapi.data.Car;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "Users")
public class UserDocument {
    private ObjectId id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String phoneNumber;
    private Address address;
    private Set<Car> cars;
    private Set<ObjectId> favouriteGarages;
    private Set<RepairBooking> userBookings;

    public static UserDocument convert (User user){
        return new UserDocument(user.getId(),
                user.getName(),
                user.getSurname(),
                user.getEmail(),
                user.getPassword(),
                user.getPhoneNumber(),
                user.getAddress(),
                user.getCars(),
                user.getFavouriteGarages(),
                user.getUserBookings());
    }
}
