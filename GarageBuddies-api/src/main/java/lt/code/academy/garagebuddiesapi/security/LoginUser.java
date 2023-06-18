package lt.code.academy.garagebuddiesapi.security;

import lombok.Getter;
import lt.code.academy.garagebuddiesapi.data.*;
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
    private final Integer numberOfCars;
    private final Set<ObjectId> favouriteGarages;
    private final Set<RepairBooking> userBookings;
    private final Set<String> roles;
    private final Set<Notification>notifications;

    public LoginUser (User user ){
        id = user.getId().toString();
        name = user.getName();
        surname = user.getSurname();
        username = user.getUsername();
        email = user.getEmail();
        phoneNumber = user.getPhoneNumber();
        address = user.getAddress();
        cars = user.getCars();
        numberOfCars = user.getNumberOfCars();
        favouriteGarages = user.getFavouriteGarages();
        userBookings = user.getUserBookings();
        roles = user.getRoles().stream().map(Role::getName).collect(Collectors.toSet());
        notifications = user.getNotifications();
    }
}
