package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;
@AllArgsConstructor
@Setter
@Getter
public class Notification {
    private final String id;
    private final String header;
    private final String notificationText;
    private final LocalDate date;

}
