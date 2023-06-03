package lt.code.academy.garagebuddiesapi.data;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@NoArgsConstructor
@Setter
@Getter
public class NextEngineOilChange {
    Integer mileage;
    LocalDate date;
}
