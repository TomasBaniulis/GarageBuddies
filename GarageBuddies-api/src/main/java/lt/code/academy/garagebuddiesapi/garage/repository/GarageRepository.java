package lt.code.academy.garagebuddiesapi.garage.repository;

import lt.code.academy.garagebuddiesapi.garage.document.GarageDocument;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

    public interface GarageRepository extends MongoRepository<GarageDocument, ObjectId> {
    }

