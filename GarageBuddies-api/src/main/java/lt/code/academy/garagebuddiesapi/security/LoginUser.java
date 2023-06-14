package lt.code.academy.garagebuddiesapi.security;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lt.code.academy.garagebuddiesapi.data.Address;
import lt.code.academy.garagebuddiesapi.data.Car;
import lt.code.academy.garagebuddiesapi.data.RepairBooking;
import lt.code.academy.garagebuddiesapi.data.Role;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;

import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class LoginUser {
    private final String id;
    private final String name;
    private final String surname;
    private final String username;
    private final String email;
    private final String phoneNumber;
    private final Address address;
    private final Set<Car> cars;
    private final Set<ObjectId> favouriteGarages;
    private final Set<RepairBooking> userBookings;
    private final Set<String> roles;

    public LoginUser (User user ){
        id = user.getId().toString();
        name = user.getName();
        surname = user.getSurname();
        username = user.getUsername();
        email = user.getEmail();
        phoneNumber = user.getPhoneNumber();
        address = user.getAddress();
        cars = user.getCars();
        favouriteGarages = user.getFavouriteGarages();
        userBookings = user.getUserBookings();
        roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
    }
}
