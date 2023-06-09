package lt.code.academy.garagebuddiesapi.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.user.document.UserDocument;
import org.bson.types.ObjectId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Set;
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class User implements UserDetails {
    private ObjectId id;
    @NotBlank
    @Size(min=3, max=15)
    private String name;
    @NotBlank
    @Size(min=3, max=15)
    private String surname;
    @NotBlank
    @Size(min=3, max=15)
    private String username;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
    @NotBlank
    private String repeatPassword;
    @NotBlank
    private String phoneNumber;
    private Address address;
    private Set<Car> cars;
    private Integer numberOfCars;
    private Set<ObjectId> favouriteGarages;
    private Set<RepairBooking> userBookings;
    private Set<Role> roles;
    private Set<Notification> notifications;

    public User(ObjectId id, String name, String surname, String username, String email, String password, String phoneNumber, Address address, Set<Car> cars, Integer numberOfCars, Set<ObjectId> favouriteGarages, Set<RepairBooking> userBookings, Set<Role> roles, Set<Notification> notifications) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.cars = cars;
        this.numberOfCars = numberOfCars;
        this.favouriteGarages = favouriteGarages;
        this.userBookings = userBookings;
        this.roles = roles;
        this.notifications=notifications;
    }

    public static User convert (UserDocument userDocument){
        return new User(userDocument.getId(),
                userDocument.getName(),
                userDocument.getSurname(),
                userDocument.getUsername(),
                userDocument.getEmail(),
                userDocument.getPassword(),
                userDocument.getPhoneNumber(),
                userDocument.getAddress(),
                userDocument.getCars(),
                userDocument.getNumberOfCars(),
                userDocument.getFavouriteGarages(),
                userDocument.getUserBookings(),
                userDocument.getRoles(),
                userDocument.getNotifications());
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
