import React, { useContext } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import { routes } from "../config/routes";
import { AppContext } from "../contexts/AppContext";
import { NavLink as Link } from "react-router-dom";

function NavigationDrawer() {
    const context = useContext(AppContext);
    return (
        <React.Fragment>
            <Drawer open={context.isDrawerOpen} onClose={context.toggleDrawer}>
                <List component="nav">
                    {routes.map((route, index) => (
                        <Link to={route.path} key={index}>
                            <ListItem button>
                                <ListItemIcon>{route.icon}</ListItemIcon>
                                <ListItemText primary={route.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    );
}

export default NavigationDrawer;
