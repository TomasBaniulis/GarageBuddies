package lt.code.academy.garagebuddiesapi.user;
import lombok.AllArgsConstructor;
import static lt.code.academy.garagebuddiesapi.EndPoint.*;

import lt.code.academy.garagebuddiesapi.EndPoint;
import lt.code.academy.garagebuddiesapi.data.Car;
import lt.code.academy.garagebuddiesapi.data.CarRegistrationData;
import lt.code.academy.garagebuddiesapi.data.RepairBooking;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import lt.code.academy.garagebuddiesapi.user.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
@RestController
@RequestMapping(USERS)
public class UserController {

    private final UserService userService;
    @PreAuthorize("hasRole('USER')")
    @GetMapping(value = USER, produces = MediaType.APPLICATION_JSON_VALUE)
    public User ShowUser (@PathVariable(userId) ObjectId id){

        return userService.showUserById(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> showAllUsers(){
        return userService.showAllUsers();}
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewUser(@Validated @RequestBody User user){
        userService.createUser(user);
    }

    @PreAuthorize("hasRole('USER')")
    @PutMapping(value = USER, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateUser(@RequestBody User user, @PathVariable(userId) ObjectId id){
        user.setId(id);
        userService.updateUser(user);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping(value = ADD_CAR,consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void addCar (@RequestBody CarRegistrationData car, @PathVariable(userId) ObjectId id){
        userService.addCar(id, car);
    }

    @PreAuthorize("hasRole('USER')")
    @PostMapping(value = ADD_RESERVATION, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void addReservation (@RequestBody RepairBooking reservation, @PathVariable(userId) ObjectId id){
        userService.addReservation(id, reservation);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(value = USER,consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser (@PathVariable(userId) ObjectId id){
        userService.deleteUser(id);
    }

    @PreAuthorize("hasRole('USER')")
    @DeleteMapping(MESSAGE_DELETE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMessage ( @PathVariable(userId) ObjectId id, @PathVariable(messageId) String messId){
        userService.deleteNotification(id, messId);
    }







}