package lt.code.academy.garagebuddiesapi.garage.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.code.academy.garagebuddiesapi.data.*;
import lt.code.academy.garagebuddiesapi.garage.document.GarageDocument;
import lt.code.academy.garagebuddiesapi.user.dto.User;
import org.bson.types.ObjectId;

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
    private Set<Address> addresses;
    private Set<RepairType> companyProfile;
    private String companyDescription;
    private Set<Evaluation> evaluations;
    private Double evaluation;
    private Set<User> customers;
    private Set <WorkPlace> workPlaces;
    private Set<RepairPrices> priceList;
    private Set<CustomerComment> customerComments;
    private Set<CarRepair> allRepairs;

    public Garage(ObjectId id, String companyCode, String vatCode, String companyName, String email, String password, Set<Address> addresses, Set<RepairType> companyProfile, String companyDescription, Set<Evaluation> evaluations, Double evaluation, Set<User> customers, Set<WorkPlace> workPlaces, Set<RepairPrices> priceList, Set<CustomerComment> customerComments, Set<CarRepair> allRepairs) {
        this.id = id;
        this.companyCode = companyCode;
        this.vatCode = vatCode;
        this.companyName = companyName;
        this.email = email;
        this.password = password;
        this.addresses = addresses;
        this.companyProfile = companyProfile;
        this.companyDescription = companyDescription;
        this.evaluations = evaluations;
        this.evaluation = evaluation;
        this.customers = customers;
        this.workPlaces = workPlaces;
        this.priceList = priceList;
        this.customerComments = customerComments;
        this.allRepairs = allRepairs;
    }

    public static Garage convert (GarageDocument garageDocument){
        return new Garage(garageDocument.getId(),
                garageDocument.getCompanyCode(),
                garageDocument.getVatCode(),
                garageDocument.getCompanyName(),
                garageDocument.getEmail(),
                garageDocument.getPassword(),
                garageDocument.getAddresses(),
                garageDocument.getCompanyProfile(),
                garageDocument.getCompanyDescription(),
                garageDocument.getEvaluations(),
                garageDocument.getEvaluation(),
                garageDocument.getCustomers(),
                garageDocument.getWorkPlaces(),
                garageDocument.getPriceList(),
                garageDocument.getCustomerComments(),
                garageDocument.getAllRepair());
    }
}
