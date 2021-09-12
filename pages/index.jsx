import MainLayout from '../src/Layout/Main'
import Form from '../src/components/Form'
import { CustomInput } from '../src/components/Form'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <MainLayout>
      <section className="centers flex-col text-4xl text-center">
        <h1 className="lg:w-1/4 mt-10 lg:mt-24 mb-10 overflow-hidden">
          Lluvia de ideas, negocios y oportunidades para el 2022.
        </h1>
        <div className="w-60 border" />
        <span className="text-lg font-light my-10 w-3/5">Descubrirás oportunidades de negocios rentables para emprender en el 2022, sin mucho presupuesto y con gran potencial</span>
        <div className="my-3 flex">
          <CustomInput
            id={'email'}
            name={'correo'}
            placeholder={'Tu correo'}
            type={'text'}
            solo
          />
          <button className="bg-secondary text-white p-8 py-3 text-sm">
            ¡registrate ahora!
          </button>
        </div>
      </section>

      <section className="center-Y w-full flex-col">
        <div className="w-2/4 centers">
          <div className="w-container">
            <iframe src="https://player.vimeo.com/video/540944873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=9d328be537" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ejercicio utilizando el enfoque de &amp;quot;Podar&amp;quot;"></iframe>
          </div>
        </div>
        <div className="w-3/5">
          <div className="w-full mt-10 center-X">
            <Form />
          </div>
        </div>
        <div className="border my-6 w-3/4" />
      </section>

      <section className="center-Y flex-col">
        <div className="text-lg text-center font-light my-10 w-3/5">
          <span>¿Quién dijo que no es momento de emprender? La actual pandemia nos ha llenado de temores, frustraciones e incertidumbre. Los periódicos y noticieros se han encargado de difundir el lado más oscuro: millones de empleos perdidos, países en crisis, personas deprimidas, muerte y desconsuelo. Pero también existe un lado B. El lado de las oportunidades, el de las posibilidades, el de las ideas y el del “sí se puede”.</span>
        </div>
        <div className="border my-6 w-3/4" />
        <div className="text-lg text-center font-light my-10 w-3/5">
          <span>
            <p class="bold"> Esta Masterclass puede convertirse en los mejores 60 minutos de tu vida.</p>

            Quiero ayudarte a que encuentres una idea de negocio que te diversifique y que en un futuro multiplique tus ingresos.

            Quizá, aquí encuentres ese negocio perfecto que te permitirá ganar dinero extra para irte de vacaciones el próximo año, o esa mega oportunidad que te permita convertirte en el exitoso emprendedor que siempre soñaste. O tal vez, sea el espacio en el que encuentres a tu futuro socio.

            Acuérdate que todo comienza con una buena idea y yo tengo muchas para compartir contigo.
          </span>
          <div className="border my-6 w-3/4" />
          <div className="w-full center-X">
            <Form />
          </div>
        </div>
      </section>
      <section className="center-Y flex-col">
        <div className="text-lg text-center font-light my-10 w-3/5">
          <span>Esta Masterclass es para ti si:

            Haz intentado emprender en más de una ocasión, sin éxito

            Quieres emprender, pero no sabes qué negocio poner

            Deseas generar una nueva fuente de ingresos

            Tienes un negocio y quieres aprovechar las nuevas oportunidades para hacerlo crecer

            O simplemente tienes curiosidad de conocer qué negocios funcionarán con éxito en el 2022</span>
        </div>
        <div className="border my-6 w-3/4" />
        <div className="text-lg text-center font-light my-10 w-3/5">
          <span>
            Aquí te cuento un poco sobre mi:

            Todos los días, junto con mi equipo, investigo y escribo sobre ideas de negocios surgiendo alrededor del mundo. Hasta la fecha, hemos reportado y analizado cerca de 3,500 emprendimientos.

            Creo que todo gran negocio inicia con una buena idea y mi propósito es ese: ayudarte a encontrar una gran idea que te permita lograr tus sueños.

            En 6 años he logrado hacer de The Monopolitan un medio independiente con reconocimiento internacional. Tan solo en lo que va de este 2021, más de 3 millones de personas han visitado nuestra web en busca de ideas y oportunidades para emprender.

            También soy fundador de Mibox, una empresa pionera en el mundo de las food boxes que hoy factura varios millones de pesos al año.

            Y lo más importante: soy papá de María Emilia, una bebé de 6 meses y estoy felizmente casado desde hace 4 años con mi esposa Vany.
          </span>
          <div className="border my-6 w-3/4" />
        </div>
      </section>
      <div className="center-X container mx-auto my">
      </div>
      <Footer />
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
