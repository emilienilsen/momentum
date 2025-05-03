import {Card, CardContent} from "@mui/material";

type RecommendedWorkoutCardProps = {
    title: string;
    category: string;
    duration: number;
    level: string;

}

export function RecommendedWorkoutCard({title, category, duration, level}: RecommendedWorkoutCardProps) {
    return (
        <>
            <Card className='m-3 border-1 border-gray-300'>
                <CardContent className='flex'>
                    <div className='w-1/3 flex items-center'>
                        <img src='../../public/momentum_logo.svg' className="mr-2 " alt='Logo'></img>
                    </div>
                    <div className='w-2/3'>
                        <p className='font-semibold text-xl px-2'>{title}</p>
                        <div className='flex flex-row items-center m-1 '>
                            <p className='text-xs rounded-xl mx-2 py-1'>{category}</p>
                            <p className='text-xs'>{duration} min</p>
                        </div>
                        <div className='p-2 '></div>
                        <div className='flex justify-between items-center px-3 '>
                            <p className='text-xs'>{level}</p>
                            <button className='font-bold primary-color px-3 py-2 rounded-xl'>Start</button>
                        </div>

                    </div>
                </CardContent>
            </Card>
        </>

    );
}