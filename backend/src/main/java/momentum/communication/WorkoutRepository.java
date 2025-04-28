package momentum.communication;

import momentum.entities.Workout;
import org.springframework.data.repository.CrudRepository;

public interface WorkoutRepository extends CrudRepository<Workout, Integer> {
}
