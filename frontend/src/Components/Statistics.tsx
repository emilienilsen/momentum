import {FitnessCenter, Whatshot} from "@mui/icons-material";
import {Workout} from "../Api/Models/workout.ts";

export function Statistics({workouts}: { workouts?: Workout[] }) {
    const todaysDate = new Date().toISOString().split('T')[0];

    const workoutOfTheDay = workouts?.find((workout: { date: Date }) =>
        workout.date.toString().startsWith(todaysDate));

    return (
        // TODO: Gjør på samme måte som WorkoutCategories/box
        <div className='flex justify-center'>
            <div className='rounded-xl primary-color flex flex-col items-center p-3 m-3 w-1/2'>
                <FitnessCenter></FitnessCenter>
                <h1 className='font-bold'>Today's workout</h1>
                <p className='text-xs'>{workoutOfTheDay?.title ?? "Rest!"}</p>
            </div>

            {/*TODO: When profile is up, fetch data for this. */}
            <div className='rounded-xl primary-color flex flex-col items-center p-3 m-3 w-1/2'>
                <Whatshot></Whatshot>
                <h1 className='font-bold'>Calories</h1>
                <p className='text-xs'>320 burned</p>
            </div>
        </div>
    );
}