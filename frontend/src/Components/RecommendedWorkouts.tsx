import {useState} from "react";
import {RecommendedWorkoutCard} from "./RecommendedWorkoutCard.tsx";
import {Workout} from "../Api/Models/workout.ts";
import clsx from 'clsx';

const LevelValuesArray = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type LevelValues = typeof LevelValuesArray[number];

export function RecommendedWorkouts({workouts}: { workouts?: Workout[] }) {

    const [selectedValue, setSelectedValue] = useState<LevelValues>('All');

    const filteredWorkouts = (selectedValue === "All" ? workouts : workouts?.filter((workout) => workout.level === selectedValue)) ?? [];

    const handleChange = (newValue: LevelValues) => {
        setSelectedValue(newValue);
    };

    return (
        <div>
            <div className='primary-color flex rounded-md justify-around p-1 m-3'>
                {LevelValuesArray.map((value) => {
                    return (
                        <button
                            onClick={() => handleChange(value)}
                            className={clsx(
                                'px-2 py-1 rounded-md',
                                selectedValue === value ? 'bg-white font-semibold' : ''
                            )}
                        >
                            {value}
                        </button>
                    )
                })}
            </div>

            {filteredWorkouts.map((workout: Workout) => {
                return (
                    <RecommendedWorkoutCard level={workout.level} title={workout.title} category={workout.category}
                                            duration={workout.duration}></RecommendedWorkoutCard>
                )
            })}
        </div>
    );
}