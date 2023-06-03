package lt.code.academy.garagebuddiesapi;

public interface EndPoint {

    String userId = "userId";
    String garageId = "garageId";

    String ROOT = "/api";
    String USERS = ROOT + "/users";
    String USER = "/{" + userId + "}";

    String GARAGES = ROOT + "/garages";

    String GARAGE = "/{" + garageId + "}";

}
