package lt.code.academy.garagebuddiesapi.garage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.garage.document.GarageDocument;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Garage {

    private ObjectId id;
    private String companyCode;
    private String vatCode;
    private String companyName;
    private String email;
    private String password;
    private String passwordRepeat;
    private Address address;
    private List<String> companyProfile;
    private String companyDescription;
    private Set<Evaluation> evaluations;
    private Double evaluation;
    private Set<User> customers;
    private Set <WorkPlace> workPlaces;
    private Set<RepairPrices> priceList;
    private Set<CarRepair> allRepairs;

    public Garage(String companyCode, String vatCode, String companyName, String email, String password, String passwordRepeat, Address address, List<String> companyProfile, String companyDescription) {
        this.companyCode = companyCode;
        this.vatCode = vatCode;
        this.companyName = companyName;
        this.email = email;
        this.password = password;
        this.passwordRepeat = passwordRepeat;
        this.address = address;
        this.companyProfile = companyProfile;
        this.companyDescription = companyDescription;
    }

    public Garage(ObjectId id, String companyCode, String vatCode, String companyName, String email, String password, Address address, List<String> companyProfile, String companyDescription, Set<Evaluation> evaluations, Double evaluation, Set<User> customers, Set<WorkPlace> workPlaces, Set<RepairPrices> priceList, Set<CarRepair> allRepairs) {
        this.id = id;
        this.companyCode = companyCode;
        this.vatCode = vatCode;
        this.companyName = companyName;
        this.email = email;
        this.password = password;
        this.address = address;
        this.companyProfile = companyProfile;
        this.companyDescription = companyDescription;
        this.evaluations = evaluations;
        this.evaluation = evaluation;
        this.customers = customers;
        this.workPlaces = workPlaces;
        this.priceList = priceList;
        this.allRepairs = allRepairs;
    }

    public static Garage convert (GarageDocument garageDocument){
        return new Garage(garageDocument.getId(),
                garageDocument.getCompanyCode(),
                garageDocument.getVatCode(),
                garageDocument.getCompanyName(),
                garageDocument.getEmail(),
                garageDocument.getPassword(),
                garageDocument.getAddress(),
                garageDocument.getCompanyProfile(),
                garageDocument.getCompanyDescription(),
                garageDocument.getEvaluations(),
                garageDocument.getEvaluation(),
                garageDocument.getCustomers(),
                garageDocument.getWorkPlaces(),
                garageDocument.getPriceList(),
                garageDocument.getAllRepair());
    }
}
