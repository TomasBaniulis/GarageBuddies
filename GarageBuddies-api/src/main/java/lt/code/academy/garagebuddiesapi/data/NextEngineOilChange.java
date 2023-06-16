package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class NextEngineOilChange {
    Integer changedAtMileage;
    Integer nextChangeMileage;
    LocalDate changedAtDate;
    LocalDate nextChangeDate;

}
