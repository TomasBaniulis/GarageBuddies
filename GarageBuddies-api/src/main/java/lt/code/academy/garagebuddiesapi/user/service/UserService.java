package lt.code.academy.garagebuddiesapi.user.service;

import lombok.AllArgsConstructor;
import lt.code.academy.garagebuddiesapi.data.Car;
import lt.code.academy.garagebuddiesapi.data.RepairBooking;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.user.document.UserDocument;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import lt.code.academy.garagebuddiesapi.user.repository.UserRepository;
import org.bson.types.ObjectId;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;

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
        Set<Car> cars = new HashSet<>();
        Set<ObjectId> garages = new HashSet<>();
        Set < RepairBooking> bookings = new HashSet<>();
        user.setCars(cars);
        user.setFavouriteGarages(garages);
        user.setUserBookings(bookings);
        userRepository.save(UserDocument.convert(user));
    }

    public void deleteUser (ObjectId id){
        userRepository.deleteById(id);
    }

    public void updateUser (User user){
        showUserById(user.getId());
        userRepository.save(UserDocument.convert(user));


    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDocument userDocument = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException(String.format("user %s not found", username)));
        return  User.convert(userDocument);
    }
}