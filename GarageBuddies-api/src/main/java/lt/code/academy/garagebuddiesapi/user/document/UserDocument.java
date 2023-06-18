package lt.code.academy.garagebuddiesapi.user.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

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
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private Address address;
    private Set<Car> cars;
    private Integer numberOfCars;
    private Set<ObjectId> favouriteGarages;
    private Set<RepairBooking> userBookings;
    private Set<Role> roles;
    private Set<Notification> notifications;

    public static UserDocument convert (User user){
        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
        return new UserDocument(user.getId(),
                user.getName(),
                user.getSurname(),
                user.getUsername(),
                user.getEmail(),
                encoder.encode(user.getPassword()),
                user.getPhoneNumber(),
                user.getAddress(),
                user.getCars(),
                user.getNumberOfCars(),
                user.getFavouriteGarages(),
                user.getUserBookings(),
                user.getRoles(),
                user.getNotifications());
    }

    public static UserDocument convertWithoutEncryption (User user){
        return new UserDocument(user.getId(),
                user.getName(),
                user.getSurname(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                user.getPhoneNumber(),
                user.getAddress(),
                user.getCars(),
                user.getNumberOfCars(),
                user.getFavouriteGarages(),
                user.getUserBookings(),
                user.getRoles(),
                user.getNotifications());
    }
}
