import React, { useState } from "react";
import { AppProvider } from "../contexts/AppContext";

function AppContainer({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    function toggleDrawer() {
        setIsDrawerOpen(!isDrawerOpen);
    }
    return (
        <AppProvider
            value={{
                isDrawerOpen,
                toggleDrawer
            }}
        >
            {children}
        </AppProvider>
    );
}

export default AppContainer;
