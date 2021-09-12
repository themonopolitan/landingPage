import MainLayout from '../src/Layout/Main'
import Form from '../src/components/Form'

export default function Home() {
  return (
    <MainLayout>
      <section className="centers flex-col text-4xl text-center">
        <span className="lg:w-1/4 mt-10 lg:mt-24 mb-10 overflow-hidden">
          Lluvia de ideas, negocios y oportunidades para el 2022.
        </span>
        <div className="w-60 border" />
        <span className="text-lg font-light my-10 w-3/5">Descubrirás oportunidades de negocios rentables para emprender en el 2022, sin mucho presupuesto y con gran potencial</span>
      </section>

      <section className="center-X w-full flex-col">
        <div className="absolute w-full h-1/2" />

        <div className="w-2/4 centers">
          <div className="w-container">
            <iframe src="https://player.vimeo.com/video/540944873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=9d328be537" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ejercicio utilizando el enfoque de &amp;quot;Podar&amp;quot;"></iframe>
          </div>
        </div>
        <div className="w-2/4 mt-10">
          <Form />
        </div>
        <div className="border my-6 w-3/4" />
      </section>
      <div className="center-X container mx-auto my">
      </div>
      <style jsx global>{
        `
            .w-container {
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;
                position: relative;
            }
            .w-container iframe {
              position: absolute;
              width: 100%;
              height: 100%;
            }
            @media (min-width: 1024px){
                .sportradar-container {
                    width: 100%;
                    height: 0;
                    padding-bottom: 79.25%;
                    position: relative;
                }
            }
            `
      }</style>
    </MainLayout>

  )
}
