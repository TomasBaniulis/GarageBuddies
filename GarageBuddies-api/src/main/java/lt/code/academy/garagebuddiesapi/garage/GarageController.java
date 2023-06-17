package lt.code.academy.garagebuddiesapi.garage;

import lombok.AllArgsConstructor;
import static  lt.code.academy.garagebuddiesapi.EndPoint.*;

import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.garage.dto.GarageDataForUser;
import lt.code.academy.garagebuddiesapi.garage.service.GarageService;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(GARAGES)
public class GarageController {

    private final GarageService garageService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Garage> showAllGarages (){
        return garageService.getAllGarages();
    }

    @GetMapping(value = GARAGE, produces = MediaType.APPLICATION_JSON_VALUE)
    public GarageDataForUser ShowGarage (@PathVariable(garageId)ObjectId id){
        return garageService.showGarageToUserById(id);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createNewGarage(@RequestBody Garage garage){
        garageService.createGarage(garage);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping(GARAGE)
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateGarage(@RequestBody Garage garage, @PathVariable(garageId) ObjectId id){
        garage.setId(id);
        garageService.updateGarage(garage);
    }
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(GARAGE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGarage(@PathVariable(garageId) ObjectId id){
        garageService.deleteById(id);
    }




}