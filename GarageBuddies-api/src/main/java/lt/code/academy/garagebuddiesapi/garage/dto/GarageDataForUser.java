package lt.code.academy.garagebuddiesapi.garage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.Address;
import lt.code.academy.garagebuddiesapi.data.Evaluation;
import lt.code.academy.garagebuddiesapi.data.RepairPrices;
import lt.code.academy.garagebuddiesapi.data.WorkPlace;
import org.bson.types.ObjectId;

import java.util.Map;
import java.util.Set;
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class GarageDataForUser {

    private ObjectId id;
    private String companyCode;
    private String vatCode;
    private String companyName;
    private String email;
    private Address address;
    private String numberOfWorkPlaces;
    private String companyDescription;
    private Set<Evaluation> evaluations;
    private Double evaluation;
    private Map<String, WorkPlace> workPlaces;
    private Set<RepairPrices> priceList;

    public static GarageDataForUser convert (Garage garage){
        return new GarageDataForUser(garage.getId(),
                garage.getCompanyCode(),
                garage.getVatCode(),
                garage.getCompanyName(),
                garage.getEmail(),
                garage.getAddress(),
                garage.getNumberOfWorkPlaces(),
                garage.getCompanyDescription(),
                garage.getEvaluations(),
                garage.getEvaluation(),
                garage.getWorkPlaces(),
                garage.getPriceList());
    }
}

