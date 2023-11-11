
import AppRouter from "./routers/AppRouter";
import CssBaseline from "@mui/material/CssBaseline";
// import { UserProvider } from './context/UserContext';
// import { EgressProvider } from './context/EgressContext';
// import { IncomeProvider } from './context/IncomeContext';


function App() {
  return (
    // <UserProvider>
    //   <IncomeProvider>
    // <EgressProvider>
    <>
      <CssBaseline>
        <AppRouter />{" "}
      </CssBaseline>
    </>
    /* </EgressProvider> */
    //   </IncomeProvider>
    // </UserProvider>
  );
}

export default App;
