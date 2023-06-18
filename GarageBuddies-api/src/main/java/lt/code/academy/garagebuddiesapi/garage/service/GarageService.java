package lt.code.academy.garagebuddiesapi.garage.service;

import lombok.AllArgsConstructor;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.garage.document.GarageDocument;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.garage.dto.GarageDataForUser;
import lt.code.academy.garagebuddiesapi.garage.repository.GarageRepository;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.*;

@AllArgsConstructor
@Service
public class GarageService {

    private final GarageRepository garageRepository;
    public List<GarageDataForUser> getAllGarages () {

        List <Garage> garages = garageRepository.findAll()
                .stream()
                .map(Garage::convert)
                .toList();
        return garages.stream()
                .map(GarageDataForUser::convert)
                .toList();
    }

    public Garage getGarageById (ObjectId id){
        return Garage.convert(Objects.requireNonNull(garageRepository.findById(id).orElse(null)));
    }

    public GarageDataForUser showGarageToUserById (ObjectId id){
        Garage garage = getGarageById(id);
        return GarageDataForUser.convert(garage);
    }

    public void deleteById (ObjectId id){
        garageRepository.deleteById(id);
    }

    public void createGarage (Garage garage){
        Double evaluation = 0.0;
        Set<Evaluation>evaluations = new HashSet<>();
        Set<User> customers = new HashSet<>();
        Set<RepairPrices> priceList = new HashSet<>();
        Set<CarRepair>allRepairs = new HashSet<>();
        Map <String,WorkPlace> workPlaces = new HashMap<>();
        for (int i =0; i<Integer.parseInt(garage.getNumberOfWorkPlaces()); i++){
            Set<RepairBooking>bookings=new HashSet<>();
            List<RepairType> repairsList = new ArrayList<>();
            repairsList.add(RepairType.ENGINE_OIL_CHANGE);
            repairsList.add(RepairType.GLOW_PUG_CHANGE);
            repairsList.add(RepairType.CLUTCH_CHANGE);
            repairsList.add(RepairType.SPARK_PLUGS_CHANGE);
            repairsList.add(RepairType.BRAKES_REPAIR);
            repairsList.add(RepairType.ENGINE_REPAIR);
            repairsList.add(RepairType.BATTERY_CHANGE);
            repairsList.add(RepairType.SUSPENSION_REPAIR);
            repairsList.add(RepairType.AIR_CONDITIONING_REPAIR);
            String workPlaceNumber = String.valueOf(i++);
            workPlaces.put(workPlaceNumber ,new WorkPlace(
                    UUID.randomUUID().toString(),
                    repairsList,
                    bookings));
        }

        garage.setEvaluation(evaluation);
        garage.setEvaluations(evaluations);
        garage.setCustomers(customers);
//        garage.setWorkPlaces(workPlaces);
//        garage.setPriceList(priceList);
        garage.setAllRepairs(allRepairs);

        garageRepository.save(GarageDocument.convert(garage));
    }

    public void updateGarage (Garage garage){
        garageRepository.save(GarageDocument.convert(garage));
    }





}
