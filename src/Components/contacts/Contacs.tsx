
export const Contacs = () => {
  return (
    <section className="flex flex-row mt-1 gap-4">
      <a href="https://www.instagram.com/wilgrey_mmd/" target="_blank">
        <img
          className=" w-14 transition-all duration-100 hover:-translate-y-1 hover:drop-shadow-xl hover:shadow-slate-900  "
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/600px-Instagram_logo_2022.svg.png"
          alt="Mi instagram"
        />
      </a>

      <a href="https://www.tiktok.com/@dynuce96qodb" target="_blank">
        <img
          className=" w-14 transition-all duration-100 hover:-translate-y-1 hover:drop-shadow-xl hover:shadow-slate-900  "
          src="https://cdn.pixabay.com/photo/2021/06/15/12/28/tiktok-6338432_960_720.png"
          alt="Mi tick tock"
        />
      </a>

      <a href="https://www.facebook.com/wilgrey.ravelocruz.9" target="_blank">
        <img
          className=" w-14 transition-all duration-100 hover:-translate-y-1 hover:drop-shadow-xl hover:shadow-slate-900  "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
          alt="Mi Faceboock"
        />
      </a>
    </section>
  );
};
