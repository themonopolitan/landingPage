import Figuritas from "./Figuritas";
import useWindowSize from "../hooks/useWindowsSize";
import { useEffect, useState } from "react";

const Video = ({url}) => {
    const size = useWindowSize();
    const [sizeDocument, setSizeDocument] = useState()

    useEffect(()=>{
        let box = document.body;
        let width = box.offsetWidth;
        setSizeDocument(width)
    },[]);

    useEffect(()=>{
        if(size.width != undefined) setSizeDocument(size.width)
    },[size]);


    return<>
        <section className="center-Y w-full flex-col relative">
        <div className="absolute h-1/2 bg-fondo w-full" />
        <div className="w-full px-3 lg:w-3/5 centers ">
          <div className="w-container sticky">
            <iframe src={url} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Ejercicio utilizando el enfoque de &amp;quot;Podar&amp;quot;"></iframe>
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
    </>
    
}

export default Video;