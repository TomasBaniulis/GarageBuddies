package lt.code.academy.garagebuddiesapi.data;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@AllArgsConstructor
public class Role implements GrantedAuthority {
    String name;

    private static final String ROLE_PREFIX = "ROLE_";

    @Override
    public String getAuthority() {
        return ROLE_PREFIX + name;
    }


}