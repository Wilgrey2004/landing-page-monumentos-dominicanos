import { Footer } from "../Footer/Footer";
import { TargetaMonumentos } from "../TargetaMonumentos/TargetaMonumentos";

export const PContainer = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center gap-4 mt-20">
        <div className=" h-[80%]">
          <TargetaMonumentos
            titulo="Monumento a los Héroes de la Restauración"
            leyenda="El Monumento a los Héroes de la Restauración, conocido también como el Monumento de Santiago, está erigido en la ciudad de Santiago de los Caballeros en la República Dominicana para conmemorar el centésimo aniversario de la independencia del país."
            imgs={[
              "https://i0.wp.com/ensegundos.do/wp-content/uploads/2023/01/WhatsApp-Image-2021-06-22-at-12.04.16-PM.jpeg?resize=1024%2C640&ssl=1",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/8d/53/38/monumento-a-los-heroes.jpg?w=1200&h=-1&s=1",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/54/a9/d3/monumento-a-los-heroes.jpg?w=700&h=-1&s=1",
            ]}
            ruta="https://es.wikipedia.org/wiki/Monumento_a_los_H%C3%A9roes_de_la_Restauraci%C3%B3n"
          />

          <TargetaMonumentos
            titulo="Faro A Colon"
            leyenda="Es un monumento en forma de cruz (recordando la cristianización de las Américas) que mide aproximadamente 800 metros de largo por 36,5 metros de alto.1​ En él, se dice, que se albergan los restos del almirante Cristóbal Colón."
            imgs={[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Santo_Domingo.El_Faro_a_Col%C3%B3n.20170402.jpg/1024px-Santo_Domingo.El_Faro_a_Col%C3%B3n.20170402.jpg",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/03/23/47/caption.jpg?w=1200&h=-1&s=1",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/03/23/11/caption.jpg?w=1100&h=-1&s=1",
              "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/11/republica-dominicana_faro-a-colon_pal.jpg",
              "https://s3-eu-west-1.amazonaws.com/s3objetos/megacms/zona-colonial/imgblog/monumento-museo-faro-a-colon-santo-domingo.jpg",
            ]}
            ruta="https://es.wikipedia.org/wiki/Faro_a_Col%C3%B3n"
          />

          <TargetaMonumentos
            titulo="El Altar de la Patria"
            leyenda="Es uno de los monumentos centrales de la ciudad y de todo el país. Con un gran arco hecho de piedra y ladrillo, conocida como la Puerta del Conde, se da entrada al mausoleo. En este lugar se encuentran los restos de los tres libertadores y padres de la patria dominicana: Juan Pablo Duarte, Francisco del Rosario Sánchez y Ramón Matías Mella."
            imgs={[
              "https://blog.uber-cdn.com/cdn-cgi/image/width=900,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/05/Altar-de-la-patria.png",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cf/36/58/altar-de-la-patria.jpg?w=1200&h=-1&s=1",
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cf/36/29/altar-de-la-patria.jpg?w=1200&h=-1&s=1",
              "https://i0.wp.com/mepyd.gob.do/wp-content/uploads/2020/01/PIE-DE-FOTO-2-scaled.jpg?fit=1024%2C692&ssl=1",
            ]}
            ruta="https://en.wikipedia.org/wiki/Altar_de_la_Patria"
          />

          <TargetaMonumentos
            titulo="El Obelisco"
            leyenda="El Obelisco de Santo Domingo, también conocido como Macho, está ubicado en la avenida George Washington y consiste en una estructura de unos 40 metros de altura. Este fue inaugurado en 1937, con el fin de conmemorar el cambio transitorio de nombre de Santo Domingo a Ciudad Trujillo."
            imgs={[
              "https://blog.uber-cdn.com/cdn-cgi/image/width=900,quality=80,onerror=redirect,format=auto/wp-content/uploads/2019/05/Obelisco-Macho.png",
              "https://images.visitarepublicadominicana.org/thumbs/obelisco-santo-domingo.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuSqV4ExTcwyCjzQOj4cErftNRXhFDNj4llA&s",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY4SJMa4y7mNQuToke7mgplQVTRjm3S_Coow&s",
            ]}
            ruta="https://www.visitarepublicadominicana.org/obelisco-santo-domingo"
          />

          <TargetaMonumentos
            titulo="Plaza de La Bandera"
            leyenda="Este es uno de los monumentos de Santo Domingo más visibles, ya que está en uno de los puntos más transitados de la ciudad. La esta plaza está localizada en la intersección de las avenidas 27 de Febrero y Gregorio Luperón, y es una redoma imponente construida para representar la libertad y el patriotismo."
            imgs={[
              "https://www.construmedia.com.do/wp-content/uploads/2023/11/FOTO-9.jpg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYtvWKKEqA-WykJrbxdjrTRAZBleJ7S_y0bw&s",
              "https://idmphsmkuxkn.compat.objectstorage.us-ashburn-1.oraclecloud.com/elcaribe-bucket/uploads/2023/09/palaza5.jpg.webp",
              "https://i0.wp.com/ensegundos.do/wp-content/uploads/2020/10/Plaza-Bandera-05.jpg?resize=500%2C334&ssl=1",
            ]}
            ruta="https://es.wikipedia.org/wiki/Plaza_de_la_Bandera_(Santo_Domingo)"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
