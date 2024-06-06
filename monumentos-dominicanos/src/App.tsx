import "./App.css";
import { PContainer } from "./Components/ContenedorPrincipal/PContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { TargetaMonumentos } from "./Components/TargetaMonumentos/TargetaMonumentos";

function App() {
  return (
    <>
      <div className="flex justify-center h-screen flex-col">
        <NavBar></NavBar>

        <section className="  flex  justify-center ">
          <PContainer>
            <TargetaMonumentos
              titulo="Pruebaa!!"
              leyenda="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quae sequi quaerat veniam enim."
              imgs={[
                "https://i0.wp.com/ensegundos.do/wp-content/uploads/2023/01/WhatsApp-Image-2021-06-22-at-12.04.16-PM.jpeg?resize=1024%2C640&ssl=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/53/38/monumento-a-los-heroes.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/54/a9/d3/monumento-a-los-heroes.jpg?w=700&h=-1&s=1",
              ]}
              ruta="/"
            />

            <TargetaMonumentos
              titulo="Pruebaa!!"
              leyenda="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          quae sequi quaerat veniam enim."
              imgs={[
                "https://i0.wp.com/ensegundos.do/wp-content/uploads/2023/01/WhatsApp-Image-2021-06-22-at-12.04.16-PM.jpeg?resize=1024%2C640&ssl=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/53/38/monumento-a-los-heroes.jpg?w=1200&h=-1&s=1",
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/54/a9/d3/monumento-a-los-heroes.jpg?w=700&h=-1&s=1",
              ]}
              ruta="/"
            />
          </PContainer>
        </section>
      </div>
    </>
  );
}

export default App;
