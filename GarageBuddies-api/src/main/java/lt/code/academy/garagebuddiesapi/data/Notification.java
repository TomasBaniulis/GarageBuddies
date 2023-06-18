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
    private final String Header;
    private final String NotificationText;
    private final LocalDate date;

}
