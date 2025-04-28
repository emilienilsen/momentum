import {Favorite, FitnessCenter, ShowChart, Whatshot} from "@mui/icons-material";
import {Workout} from "../Api/Models/workout.ts";
import {WorkoutCategoryBox} from "./WorkoutCategoryBox.tsx";


export function WorkoutCategories({workouts}: { workouts?: Workout[] }) {

    const categories = Object.groupBy(workouts ?? [], workout => workout.category)

    return (
        <div className='grid grid-cols-2'>
            <WorkoutCategoryBox logo={<FitnessCenter/>} title={"Strength"} numberOfWorkouts={categories["Strength"]?.length}></WorkoutCategoryBox>
            <WorkoutCategoryBox logo={<ShowChart/>} title={"Cardio"} numberOfWorkouts={categories["Cardio"]?.length}></WorkoutCategoryBox>
            <WorkoutCategoryBox logo={<Favorite/>} title={"Flexibility"} numberOfWorkouts={categories["Flexibility"]?.length}></WorkoutCategoryBox>
            <WorkoutCategoryBox logo={<Whatshot/>} title={"HIIT"} numberOfWorkouts={categories["HIIT"]?.length}></WorkoutCategoryBox>
        </div>

    )
}