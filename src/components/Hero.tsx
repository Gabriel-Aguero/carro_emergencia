import WaveDivider from "./WaveDivider";

const Hero = () => {
  return (
    <>
      <section className="absolute top-0 w-full flex items-center justify-center py-5 px-4 bg-[#09f]">
        <div className="max-w-5xl mt-30 mx-auto px-10 flex flex-col gap-4 items-center justify-center">
          <h3 className="text-lg p-4 bg-gray-900 text-gray-100 font-bold rounded-xl py-1">
            Características
          </h3>
          <h1 className="text-3xl text-white font-extrabold uppercase text-center">
            Todo lo que necesitas para gestionar los carros de emergencia
          </h1>
          <p className="text-white text-lg font-bold max-w-2xl text-center">
            Nuestra plataforma ofrece herramientas completas para el control,
            seguimiento y mantenimiento de carros de paro en instituciones de
            salud.
          </p>
        </div>
      </section>
      <WaveDivider />
    </>
  );
};

export default Hero;
