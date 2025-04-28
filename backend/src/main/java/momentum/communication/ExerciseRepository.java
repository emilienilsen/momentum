package momentum.communication;

import momentum.entities.Exercise;
import org.springframework.data.repository.CrudRepository;

public interface ExerciseRepository extends CrudRepository<Exercise, Integer> {
}
