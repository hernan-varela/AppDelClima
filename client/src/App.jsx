// import './App.css'

// function App() {
  

//   return (
//     <>
//       <h1>mi app</h1>
//     </>
//   )
// }

// export default App
import AppRouter from './routers/AppRouter';
// import { UserProvider } from './context/UserContext';
// import { EgressProvider } from './context/EgressContext';
// import { IncomeProvider } from './context/IncomeContext';

function App() {
  return (
    // <UserProvider>
    //   <IncomeProvider>
        // <EgressProvider>
          <AppRouter />
        /* </EgressProvider> */
    //   </IncomeProvider>
    // </UserProvider>
  );
}

export default App;
