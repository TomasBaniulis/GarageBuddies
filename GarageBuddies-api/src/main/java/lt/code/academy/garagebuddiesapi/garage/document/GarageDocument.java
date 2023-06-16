package lt.code.academy.garagebuddiesapi.garage.document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.garage.dto.Garage;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Document(collection = "Garages")
public class GarageDocument {
    private ObjectId id;
    private String companyCode;
    private String vatCode;
    private String companyName;
    private String email;
    private String password;
    private Set<Address> addresses;
    private List <String> companyProfile;
    private String companyDescription;
    private Double evaluation;
    private Set<Evaluation> evaluations;
    private Set<User> customers;
    private Set<WorkPlace> workPlaces;
    private Set<RepairPrices> priceList;
    private Set<CarRepair> allRepair;

    public static GarageDocument convert (Garage garage){
        return new GarageDocument(garage.getId(),
                garage.getCompanyCode(),
                garage.getVatCode(),
                garage.getCompanyName(),
                garage.getEmail(),
                garage.getPassword(),
                garage.getAddresses(),
                garage.getCompanyProfile(),
                garage.getCompanyDescription(),
                garage.getEvaluation(),
                garage.getEvaluations(),
                garage.getCustomers(),
                garage.getWorkPlaces(),
                garage.getPriceList(),
                garage.getAllRepairs());
    }
}