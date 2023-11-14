import React from "react";

import { ThemeProvider } from "./store/context/ThemeContext";
import { useTheme } from "./store/context/ThemeContext";
import AppNavigation from "./navigations/AppNavigation";
export default function App() {
  // const { colors } = useTheme();

  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}
