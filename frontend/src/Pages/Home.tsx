import {Statistics} from "../Components/Statistics.tsx";
import {useQuery} from '@tanstack/react-query';
import {fetchWorkouts} from '../Api/api.ts';
import {WorkoutCategories} from "../Components/WorkoutCategories.tsx";
import {RecommendedWorkouts} from "../Components/RecommendedWorkouts.tsx";

export function Home() {

    const {data} = useQuery({
        queryKey: ['workouts'],
        queryFn: fetchWorkouts,
    });

    return (
        <div className="mx-2 scroll-auto pb-15 pt-15">
            {/*Welcome back, stats*/}
            <h1 className='font-bold text-xl m-3'>Welcome back!</h1>
            <Statistics workouts={data}></Statistics>

            {/*Workout categories*/}
            <h1 className='font-bold text-xl m-3'>Workout categories</h1>
            <WorkoutCategories workouts={data}></WorkoutCategories>

            {/*Recomended workouts*/}
            <h1 className='font-bold text-xl m-3'>Recommended workouts</h1>
            <RecommendedWorkouts workouts={data}></RecommendedWorkouts>

        </div>
    )
}