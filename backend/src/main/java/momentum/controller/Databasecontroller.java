package momentum.controller;

import momentum.communication.ExerciseRepository;
import momentum.communication.WorkoutRepository;
import momentum.entities.AppUser;
import momentum.communication.AppUserRepository;
import momentum.entities.Exercise;
import momentum.entities.Workout;
import momentum.service.DatabaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/database")
@CrossOrigin(origins = "http://localhost:5173") // Allow requests from React
public class Databasecontroller {
    // To populate the database.

    @Autowired
    private AppUserRepository appUserRepository;
    @Autowired
    private WorkoutRepository workoutRepository;
    @Autowired
    private ExerciseRepository exerciseRepository;

    @Autowired
    private DatabaseService databaseService;

    @GetMapping("/app_users")
    public List<AppUser> get_app_users() {
        return (List<AppUser>) appUserRepository.findAll();
    }

    @GetMapping("/workouts")
    public List<Workout> get_workouts() {
        return (List<Workout>) workoutRepository.findAll();
    }

    @GetMapping("/exercises")
    public List<Exercise> get_exercises() {
        return (List<Exercise>) exerciseRepository.findAll();
    }

}
