import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import { TopBar } from "./pages/global/TopBar";
import { Dashboard } from './pages/dashboard/index';
import Team from './pages/team/index';

import Contacts from './pages/contacts/index';
import Invoices from './pages/Invoices/index';
import Form from './pages/form/index';
import Bar from './pages/bar/index';
import Pie from './pages/pie/index';
import Faq from "./pages/faq";
import Line from "./pages/line";
import Calenders from "./pages/calender";
import MenuBar from "./pages/global/MenuBar";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MenuBar isSidebar={isSidebar} />
          <main className="content">
            <TopBar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/calendar" element={<Calenders />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
