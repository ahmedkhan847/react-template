import React from "react";
import Home from "../pages/home/Home";
import HomeIcon from "@material-ui/icons/Home";
import Menu from "../pages/menus/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";

export const routes = [
    {
        path: "/",
        name: "Home",
        component: <Home />,
        icon: <HomeIcon />
    },
    {
        path: "/menu",
        name: "Menu",
        component: <Menu />,
        icon: <MenuBookIcon />
    }
];
