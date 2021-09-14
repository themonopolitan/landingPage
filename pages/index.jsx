import MainLayout from '../src/Layout/Main'
import Form from '../src/components/Form'
import { CustomInput } from '../src/components/Form'
import Footer from '../src/components/Footer'
import Figuritas from '../src/components/Figuritas'

export default function Home() {
  return (
    <MainLayout>
      <section className="centers flex-col text-6xl text-center bg-fondo">
        <h1 className="lg:w-2/4 mt-10 lg:mt-24 mb-10 overflow-hidden font-black h-40">
          Lluvia de ideas, negocios y oportunidades para el 2022.
        </h1>
        <span className="text-2xl font-light mb-12 w-3/5">En esta masterclass de 60 minutos descubrirásoportunidades de negocios
          rentables para emprenderen el 2022, sin mucho presupuesto
          y con gran potencial:
        </span>
        <div className="mb-16 center-X items-end w-2/5">
          <div className="w-96">
            <CustomInput
              id={'email'}
              color={'bg-secondary'}
              placeholder={'Ingresa tu correo aquí'}
              type={'text'}
              solo
            />
          </div>
        </div>
        {/* <div className="w-60 border my-10" /> */}
      </section>

      <section className="center-Y w-full flex-col relative">
        <div className="absolute h-1/2 bg-fondo w-full" />
        <div className="w-3/5 centers ">
          <div className="w-container sticky">
            <iframe src="https://player.vimeo.com/video/540944873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=9d328be537" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ejercicio utilizando el enfoque de &amp;quot;Podar&amp;quot;"></iframe>
          </div>
        </div>

        <div className="border my-6 mt-16 w-3/4" />
        <Figuritas
          size={'80'}
          color={'bg-secondary'}
          position={' -left-44 bottom-0'}
          padding={'8'}
        />
      </section>

      <section className="center-Y flex-col relative">

        <div className="text-3xl text-justify font-light my-10 w-3/5 overflow-hidden">
          <span>La actual pandemia nos ha llenado de temores, frustraciones e incert
            idumbre. Los periódicos y noticieros se han encargado de difundir el
            lado más oscuro: millones de empleos perdidos, países en crisis,
            personas deprimidas, muerte y desconsuelo. Pero también existe un
            lado B. El lado de las oportunidades, el de las posibilidades, el de las
            ideas y el del “sí se puede”.</span>
        </div>

        <Figuritas
          size={'80'}
          color={'bg-red-300'}
          position={' -right-44 bottom-0'}
          padding={'8'}
        />

        <div className="border my-6 w-3/4" />
        <div className="text-2xl text-justify font-light my-10 w-3/5 overflow-hidden">
          <span classNames="bold">Esta Masterclass puede convertirse en los mejores 60 minutos de tu vida.
            Quiero ayudarte a encontrar una idea de negocio que te diversifique y que,
            en un futuro, multiplique tu ingresos.Todo comienza con una idea, y yo te
            ngo muchas para compartir contigo.

          </span>
        </div>
        <div className="border my-6 w-3/4" />
      </section>
      <section className="center-Y flex-col relative">
        <Figuritas
          size={'80'}
          color={'bg-secondary'}
          position={' -left-44'}
          padding={'8'}
        />
        <div className="flex justify-start w-3/5 text-2xl leading-8">
          <span>Esta Masterclass es para ti si: </span>
        </div>
        <div className="centers flex-col font-light my-10 w-3/5 text-2xl">
          <ol className="leading-loose">
            <li>1. Haz intentado emprender en más de una ocasión, sin éxito</li>
            <li>2. Quieres emprender, pero no sabes qué negocio poner</li>
            <li>3. Deseas generar una nueva fuente de ingresos</li>
            <li>4. Tienes un negocio y quieres aprovechar las nuevas oportunidades para hacerlo crecer</li>
            <li>5. O simplemente tienes curiosidad de conocer qué negocios funcionarán con éxito en el 2022</li>
          </ol>
        </div>
        <div className="w-96">
          <CustomInput
            id={'email'}
            color={'bg-red-300'}
            placeholder={'Ingresa tu correo aquí'}
            type={'text'}
            solo
          />
        </div>
        <div className="border my-6 w-3/4" />
        <div className="text-lg text-justify font-light my-10 w-3/5">
          <div className="centers">

            <div className="relative w-full overflow-hidden h-48 centers">
              <Figuritas
                size={'48'}
                color={'bg-red-300'}
                img={'https://themonopolitan.com/assets/img/negocio/foto.jpg'}
                padding={'2'}
              />

              <div className="flex flex-col ml-5 w-3/5">
                <p className="bold text-4xl overflow-hidden font-black">!HOLA¡</p>
                <span className="mt-2 font-light text-2xl">Soy Juan Pablo, fundador de @themonopolitan
                  y mi en esta Masterclass de 60 minutos es
                  ayudarte a encontrar una idea de negocio que
                  multiplique tus ingresos.</span>

              </div>
            </div>
          </div>
          <div className="mt-10 centers flex-col text-2xl">
            <span className="w-4/5">
              Todos los días investigo y escribo sobre ideas de negocios innovadores.
              Hasta la fecha, hemos reportado y analizado más de 3,500 emprendimien
              tos y, nuestro sitio web, tan solo en el 2021, ha inspirado a más de 3 mill
              ones de emprendedores de todo el mundo.
            </span>
            <br />
            <span className="w-4/5">
              También soy el fundador de mibox.mx, una empresa que lleva food boxes
              a empresas como Honda, Flex y Continental.
            </span>
          </div>
        </div>
        <div className="border my-6 w-3/5" />
        <div className=" w-3/5">
          <div className="text-3xl flex justify-start overflow-hidden ">
            Una razón más para unirte a la Masterclass:
          </div>
          <span className="text-2xl">
            No solo podrás encontrar una idea de negocio para emprender, también
            podrías encontrar a tu futuro socio o inversionista:
          </span>
          <div className="centers mb-16 mt-5">
            <div className="w-96 ">
              <CustomInput
                id={'email'}
                color={'bg-red-300'}
                placeholder={'Ingresa tu correo aquí'}
                type={'text'}
                solo
              />
            </div>
          </div>
        </div>

      </section>
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
    </MainLayout >

  )
}
