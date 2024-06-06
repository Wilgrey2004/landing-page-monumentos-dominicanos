import "./App.css";
import { PContainer } from "./Components/ContenedorPrincipal/PContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="overflow-auto w-full flex justify-center h-full flex-col ">
        <div className="order-3">
          <NavBar></NavBar>
        </div>
        <main className=" order-2">
          <PContainer />
        </main>
        <div className="order-1"></div>
      </div>
    </>
  );
}

export default App;
