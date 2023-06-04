package lt.code.academy.garagebuddiesapi.user;
import lombok.AllArgsConstructor;
import static lt.code.academy.garagebuddiesapi.EndPoint.*;

import lt.code.academy.garagebuddiesapi.EndPoint;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import lt.code.academy.garagebuddiesapi.user.service.UserService;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(USERS)
public class UserController {

    private final UserService userService;
    @GetMapping(value = USER, produces = MediaType.APPLICATION_JSON_VALUE)
    public User ShowUser (@PathVariable(userId) ObjectId id){

        return userService.showUserById(id);
    }
    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<User> showAllUsers(){
        return userService.showAllUsers();}
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public void createNewUser(@RequestBody User user){
        userService.createUser(user);
    }
    @PutMapping(value = USER, consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateUser(@RequestBody User user, @PathVariable(userId) ObjectId id){
        user.setId(id);
        userService.updateUser(user);
    }

    @DeleteMapping(value = USER,consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser (@PathVariable(userId) ObjectId id){
        userService.deleteUser(id);
    }






}