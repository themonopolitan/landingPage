import MainLayout from "../src/Layout/Main";
import Footer from "../src/components/Footer";
import Video from "../src/components/Video";
import Form from "../src/components/Form";

const Gracias = () => {

    return <>
        <MainLayout>
            <section className="centers flex-col text-4xl lg:text-5xl text-center bg-fondo">
                <h1 className="lg:w-2/4 mt-12 lg:mt-24 overflow-hidden font-black py-10">
                    ¡Registro Exitoso! Gracias por suscribirte a la Masterclass.
                </h1>
                <span className="text-xl font-light mb-10 mx-2 lg:mx-0 lg:w-2/5">Tengo un mensaje importante para ti. Ve este video y mira de qué se trata:
                </span>
                <div className="mb-1 center-X items-end lg:w-2/5">
                    <div className="w-96">
                    </div>
                </div>
                {/* <div className="w-60 border my-10" /> */}
            </section>
            <Video url={'https://player.vimeo.com/video/540944873?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=9d328be537'} />
            <div className="center-Y flex-col w-full ">
                <Form />
                <div className="border my-5 w-3/4" />
                <div className="lg:w-3/5 text-xl leading-8 font-black center-X mt-4">
                    <span>Recomendaciones para la Masterclass: </span>
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

            </div>

            <Footer />
        </MainLayout>

    </>
}



export default Gracias;


