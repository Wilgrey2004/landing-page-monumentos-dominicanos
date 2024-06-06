import "./App.css";
import { PContainer } from "./Components/ContenedorPrincipal/PContainer";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="overflow-auto w-full flex justify-center h-full flex-col ">
        <NavBar></NavBar>
        <main className="">
          <PContainer />
        </main>
      </div>
    </>
  );
}

export default App;
