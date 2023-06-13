package lt.code.academy.garagebuddiesapi.user.service;

import lombok.AllArgsConstructor;
import lt.code.academy.garagebuddiesapi.data.Car;
import lt.code.academy.garagebuddiesapi.data.RepairBooking;
import lt.code.academy.garagebuddiesapi.data.Role;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.user.document.UserDocument;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import lt.code.academy.garagebuddiesapi.user.exception.BusyUsernameException;
import lt.code.academy.garagebuddiesapi.user.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.*;

@AllArgsConstructor
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    public User showUserById (ObjectId id){
        return User.convert(Objects.requireNonNull(userRepository.findById(id).orElse(null)));
    }
    public List<User> showAllUsers (){
        return userRepository.findAll()
                .stream()
                .map(User::convert)
                .toList();
    }
    public void createUser (User user){
        Optional<UserDocument> username = userRepository.findByUsername(user.getUsername());
        if(username.isPresent()){
            throw new BusyUsernameException();
        }
        Set<Role> roles = new HashSet<>();
        Role userRole = new Role("USER");
        roles.add(userRole);
        Set<Car> cars = new HashSet<>();
        Set<ObjectId> garages = new HashSet<>();
        Set < RepairBooking> bookings = new HashSet<>();
        user.setCars(cars);
        user.setFavouriteGarages(garages);
        user.setUserBookings(bookings);
        user.setRoles(roles);
        userRepository.save(UserDocument.convert(user));
    }
    public void deleteUser (ObjectId id){
        userRepository.deleteById(id);
    }

    public void updateUser (User user){
        showUserById(user.getId());
        userRepository.save(UserDocument.convert(user));
    }

    public  void addCar (ObjectId id, Car car){
        User user = showUserById(id);
        Set<Car> cars = user.getCars();
        cars.add(car);
        user.setCars(cars);
        updateUser(user);
    }

    public void addReservation(ObjectId id, RepairBooking reservation){
        User user = showUserById(id);
        Set<RepairBooking> reservations = user.getUserBookings();
        reservations.add(reservation);
        updateUser(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDocument userDocument = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(String.format("user %s not found", username)));
        return  User.convert(userDocument);
    }
}