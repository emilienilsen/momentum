import {Divider} from "@mui/material";
import {PersonOutlined} from "@mui/icons-material";
import {Link} from "react-router-dom";

export function TopBar() {
    return (
        <>
            <div className="fixed w-full bg-white">
                <div className="flex p-2 py-3 justify-between">
                    <div className="flex items-center">
                        {/*<Menu className="mx-3"></Menu>*/}
                        <img src='../public/momentum_logo.svg' className=" size-7 mr-2" alt='Logo'></img>
                        <h1 className="text-xl">Momentum</h1>
                    </div>
                    <Link to={"/profile"}>
                    {/*    <Search className="mx-3"></Search>*/}
                        <PersonOutlined className="mx-3"></PersonOutlined>
                    </Link>


                </div>
                <Divider></Divider>

            </div>

        </>

    )
}