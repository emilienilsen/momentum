// api.ts
import {Workout} from "./Models/workout.ts";

export const fetchWorkouts: () => Promise<Workout[]> = async () => {
    return await fetch('http://localhost:8080/database/workouts')
        .then((res) => res.json());
};
