import MainLayout from '../src/Layout/Main'
import Form from '../src/components/Form'
import { CustomInput } from '../src/components/Form'
import Footer from '../src/components/Footer'
import Figuritas from '../src/components/Figuritas'
import useWindowSize from '../src/hooks/useWindowsSize'
import { useEffect, useState } from 'react'

export default function Home() {

  const size = useWindowSize()
  const [sizeDocument, setSizeDocument] = useState()


  useEffect(() => {
    let box = document.body;
    let width = box.offsetWidth;
    setSizeDocument(width);
  }, []);

  useEffect(() => {
    if (size.width != undefined) setSizeDocument(size.width);
  }, [size]);

  return (
    <MainLayout>
      <section className="centers flex-col text-4xl lg:text-5xl text-center bg-fondo">
        <h1 className="lg:w-2/4 mt-12 lg:mt-24 overflow-hidden font-black py-10">
          Lluvia de ideas, negocios y oportunidades para el 2022
        </h1>
        <span className="text-xl font-light mb-10 mx-2 lg:mx-0 lg:w-2/5">En esta masterclass de 60 minutos descubrirás oportunidades de negocios
          rentables para emprenderen el 2022, sin mucho presupuesto
          y con gran potencial:
        </span>
        <div className="mb-12 center-X items-end lg:w-2/5">
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
        <div className="w-full px-3 lg:w-3/5 centers ">
          <div className="w-container sticky">
            <iframe src="https://player.vimeo.com/video/540944873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=9d328be537" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ejercicio utilizando el enfoque de &amp;quot;Podar&amp;quot;"></iframe>
          </div>
        </div>

        {
          sizeDocument >= 1024 &&
          <Figuritas
            size={'80'}
            color={'bg-secondary'}
            position={' -left-44 bottom-0'}
            padding={'8'}
          />
        }
      </section>

      <section className="center-Y flex-col relative">

        <div className="lg:text-2xl text-xl mx-3 lg:mx-0 text-justify font-light mt-14 lg:w-3/5 overflow-hidden">
          <span>La actual pandemia nos ha llenado de temores, frustraciones e incert
            idumbre. Los periódicos y noticieros se han encargado de difundir el
            lado más oscuro: millones de empleos perdidos, países en crisis,
            personas deprimidas, muerte y desconsuelo. Pero también existe un
            lado B. El lado de las oportunidades, el de las posibilidades, el de las
            ideas y el del “sí se puede”.</span>
        </div>
        {
          sizeDocument >= 1024 &&
          <Figuritas
            size={'80'}
            color={'bg-red-300'}
            position={' -right-44 bottom-0'}
            padding={'8'}
          />
        }

        <div className="border mt-10 w-3/4" />
        <div className="text-xl text-justify font-light my-10 mx-3 lg:mx-0 lg:w-3/5 overflow-hidden">
          <span>Esta Masterclass puede convertirse en los mejores 60 minutos de tu vida.
            Quiero ayudarte a encontrar una idea de negocio que te diversifique y que,
            en un futuro, multiplique tus ingresos. Todo comienza con una idea, y yo tengo muchas para compartir contigo.

          </span>
        </div>
        <div className="border mt-0 mb-10 w-3/4" />
      </section>
      <section className="center-Y flex-col relative">
        {
          sizeDocument >= 1024 &&
          <Figuritas
            size={'80'}
            color={'bg-secondary'}
            position={' -left-44'}
            padding={'8'}
          />
        }
        <div className="flex justify-start lg:w-3/5 text-xl leading-8 font-black">
          <span>Esta Masterclass es para ti si: </span>
        </div>
        <div className="centers flex-col font-light my-10 mx-3 lg:mx-0 lg:w-3/5 text-xl">
          <ol className="leading-loose">
            <li>1. Haz intentado emprender en más de una ocasión, sin éxito</li>
            <li>2. Quieres emprender, pero no sabes qué negocio poner</li>
            <li>3. Deseas generar una nueva fuente de ingresos</li>
            <li>4. Tienes un negocio y quieres hacerlo crecer</li>
            <li>5. Tienes curiosidad de conocer qué negocios funcionarán con éxito</li>
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
        <div className="border mt-12 w-3/4" />

        <section className="text-lg text-justify font-light my-10 lg:w-3/5">
          <div className="centers">

            <div className="relative w-6/6 overflow-hidden lg:h-48 centers flex flex-col lg:flex-row">
              <Figuritas
                size={'48'}
                color={'bg-red-300'}
                img={'https://themonopolitan.com/assets/img/negocio/foto.jpg'}
                padding={'2'}
              />

              <div className="flex flex-col px-3 lg:px-0 lg:ml-5 lg:w-4/5">
                <p className="bold text-4xl overflow-hidden font-black">HOLA</p>
                <span className="mt-2 font-light text-xl">Soy Juan Pablo, fundador de @themonopolitan
                  y mi objetivo en esta Masterclass de 60 minutos es
                  ayudarte a encontrar una idea de negocio que
                  multiplique tus ingresos.</span>
              </div>
            </div>
          </div>
          <div className="mt-10 centers flex-col text-xl">
            <span className="w-5/5 mx-3 lg:mx-0">
              Todos los días investigo y escribo sobre ideas de negocios innovadores.
              Hasta la fecha, hemos reportado y analizado más de 3,500 emprendimientos y, nuestro sitio web, tan solo en el 2021, ha inspirado a más de 3 millones de emprendedores de todo el mundo.
            </span>
            <br />
            <span className="w-5/5 mx-3 lg:mx-0">
              También soy el fundador de mibox.mx, una empresa que lleva food boxes
              a empresas como Honda, Flex y Continental.
            </span>
          </div>
        </section>
        <div className="border mb-12 w-9/12" />
        <div className="lg:w-3/5">
          <div className="text-xl flex justify-start overflow-hidden font-black px-3 lg:px-0">
            Una razón más para unirte a la Masterclass:
          </div>
          <br />
          <span className="text-xl mx-3 lg:mx-0 text-justify">
            No solo podrás encontrar una idea de negocio para emprender, también
            podrías encontrar a tu futuro socio o inversionista:
          </span>
          <br />
          <div className="centers mb-16 mt-10">
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
