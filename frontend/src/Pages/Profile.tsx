import {Link} from "react-router-dom";
import {ArrowForwardIos} from "@mui/icons-material";

export function Profile() {


    return (
        <div className="mx-2 scroll-auto pb-15 pt-15">

            <div className="border rounded-xl border-amber-300">
                <Link to="/accountSettings" className="flex justify-between items-center mr-5">
                    <div className="flex items-center">
                        <img src='/momentum_logo.svg' className="ml-2 w-1/5" alt='Logo'></img>
                        <div className="ml-5">
                            <p className="font-semibold">Emilie Nilsen</p>
                            <p className="text-xs italic">+47 48055568</p>
                        </div>
                    </div>
                    <ArrowForwardIos></ArrowForwardIos>

                </Link>

            </div>

        </div>
    )
}