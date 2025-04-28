import {Home, Person, ShowChart} from "@mui/icons-material";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

export function BottomNavBar() {

    const [value, setValue] = useState(useLocation().pathname);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation showLabels value={value}
                onChange={(_event, newValue) => {
                    setValue(newValue);
                }}>
                <BottomNavigationAction component={Link} value="/" to="/" label="Home" icon={<Home />} />
                <BottomNavigationAction component={Link} value="/progress" to="/progress" label="Progress" icon={<ShowChart />} />
                <BottomNavigationAction component={Link} value="/profile" to="/profile" label="Profile" icon={<Person />} />
            </BottomNavigation>
        </Paper>
    )
}