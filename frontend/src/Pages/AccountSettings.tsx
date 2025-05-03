import {Link} from "react-router-dom";
import {
    ArrowBack,
    DarkModeOutlined,
    DeleteOutline,
    Key,
    KeyboardArrowRight,
    Language,
    Logout,
    Save,
    ShieldOutlined
} from "@mui/icons-material";
import {Divider, TextField} from "@mui/material";

export function AccountSettings() {

    return (
        <div className="mx-2 scroll-auto">
            <div className="fixed w-full py-2 bg-white z-1">
                <div className="flex items-center">
                    <Link to="/profile" className="flex m-2 items-center">
                        <ArrowBack/>
                    </Link>
                    <h1 className="ml-5 font-semibold">Account settings</h1>
                </div>
                <Divider></Divider>
            </div>
            <div className="pt-15">
                <div className="flex-col mt-2 flex items-center justify-center">
                    <img src='../../public/momentum_logo.svg' className="ml-2 w-1/5" alt='Logo'></img>
                    <p className="font-semibold">Emilie Nilsen</p>
                    <p className="text-xs">Member since April 2025</p>
                </div>
                <div className="flex-row border border-amber-300 mt-5 rounded p-2">
                    <p className="py-2">Name</p>
                    <TextField variant={"outlined"} fullWidth={true} size={"small"}
                               defaultValue={"Emilie Nilsen"}></TextField>
                    <p className="py-2">Email</p>
                    <TextField variant={"outlined"} fullWidth={true} size={"small"}
                               defaultValue={"emilienilseen98@gmail.com"}></TextField>
                    <p className="py-2">Mobile</p>
                    <TextField variant={"outlined"} size={"small"} fullWidth={true}
                               defaultValue={"48055568"}></TextField>
                    <button className="w-full flex justify-center items-center bg-amber-500 my-2 p-2 rounded">
                        <Save className="mx-2"></Save>
                        Save Changes
                    </button>
                </div>
                <p className="text-lg font-semibold pt-4">Account</p>
                <div className="border border-amber-300 rounded flex justify-between p-2">
                    <div className="flex items-center">
                        <Key className="mr-2"></Key>
                        <p>Change password</p>
                    </div>
                    <KeyboardArrowRight></KeyboardArrowRight>
                </div>
                <div className="border border-amber-300 rounded flex justify-between p-2">
                    <div className="flex items-center">
                        <ShieldOutlined className="mr-2"></ShieldOutlined>
                        <p>Two-factor Authentication</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs italic">Not enabled</p>
                        <KeyboardArrowRight></KeyboardArrowRight>
                    </div>
                </div>
                <div className="border border-amber-300 rounded flex justify-between p-2">
                    <div className="flex items-center">
                        <Language className="mr-2"></Language>
                        <p>Language</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs italic">English</p>
                        <KeyboardArrowRight></KeyboardArrowRight>
                    </div>

                </div>
                <div className="border border-amber-300 rounded flex justify-between p-2">
                    <div className="flex items-center">
                        <DarkModeOutlined className="mr-2"></DarkModeOutlined>
                        <p>Theme</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-xs italic">Light</p>
                        <KeyboardArrowRight></KeyboardArrowRight>
                    </div>
                </div>
                <p className="text-lg font-semibold pt-4">Danger zone</p>
                <div className="border border-amber-300 rounded mb-10">
                    <div className="flex justify-between p-2 items-center">
                        <div className="w-1/2">
                            <p className="font-bold">Delete Account</p>
                            <p className="text-xs italic text-wrap">Permanently delete your account and all your
                                data</p>
                        </div>
                        <button className="flex items-center p-2 w-1/3 h-1/3 justify-center bg-amber-500 rounded">
                            <DeleteOutline></DeleteOutline>
                            Delete
                        </button>
                    </div>
                    <div className="flex justify-between p-2 items-center">
                        <div className="w-1/2">
                            <p className="font-bold">Log out</p>
                            <p className="text-xs italic text-wrap">Sign out from your account</p>
                        </div>
                        <button
                            className="flex items-center justify-center p-2 w-1/3 h-1/3 border border-amber-300 rounded">
                            <Logout></Logout>
                            Log Out
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}