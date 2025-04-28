import {ReactNode} from "react";

type WorkoutCategoryBoxProps = {
    logo: ReactNode;
    title: string;
    numberOfWorkouts?: number;
}

export function WorkoutCategoryBox({logo, title, numberOfWorkouts}: WorkoutCategoryBoxProps) {
    return (
        <div className='flex justify-around items-center border border-gray-300 rounded-xl m-2 p-3'>
            <div className='rounded-full p-2 primary-color'>
                {logo}
            </div>
            <div>
                <p className='font-semibold'>{title}</p>
                <p className='text-xs'>{numberOfWorkouts ?? 0} workouts</p>
            </div>
        </div>
    )
}