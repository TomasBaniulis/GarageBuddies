package lt.code.academy.garagebuddiesapi.garage.service;

import lombok.AllArgsConstructor;
import lt.code.academy.garagebuddiesapi.garage.document.GarageDocument;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.garage.repository.GarageRepository;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@AllArgsConstructor
@Service
public class GarageService {

    private final GarageRepository garageRepository;
    public List<Garage> getAllGarages () {
        return garageRepository.findAll()
                .stream()
                .map(Garage::convert)
                .toList();
    }

    public Garage getGarageById (ObjectId id){
        return Garage.convert(Objects.requireNonNull(garageRepository.findById(id).orElse(null)));
    }

    public void deleteById (ObjectId id){
        garageRepository.deleteById(id);
    }

    public void createGarage (Garage garage){
        getGarageById(garage.getId());
        garageRepository.save(GarageDocument.convert(garage));
    }

    public void updateGarage (Garage garage){
        garageRepository.save(GarageDocument.convert(garage));
    }





}
