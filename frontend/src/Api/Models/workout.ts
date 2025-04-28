import {AppUser} from "./appuser.ts";
import {Exercise} from "./exercise.ts";

export type Workout = {
    id: string; // UUID
    category: string;
    level: string;
    title: string;
    trainer: AppUser;
    exercise: Exercise;
    duration: number;
    date: Date;
}
