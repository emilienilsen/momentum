// api.ts
import {Workout} from "./Models/workout.ts";

export const fetchWorkouts: () => Promise<Workout[]> = async () => {
    return await fetch('/api/database/workouts')
        .then((res) => res.json());
};
