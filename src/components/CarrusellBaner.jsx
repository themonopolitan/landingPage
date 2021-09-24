const CarrusellBanner = () => {

    const fecha = ' 7:00 PM'

    return <>
        <div className="h-10 bg-red-400 slideTrack aqui_puse_un_cambio">
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
            <Date fecha={fecha} />
            <Date wb fecha={fecha} />
        </div>

        <style jsx>{`
        .slideTrack {
            animation: scroll 30s linear infinite;
            display: flex;
            width: calc(239.31px *16 );
        }
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-239.31px * 8))}
        }
      `}</style>
    </>
}

const Date = ({ fecha, wb }) => {
    return <>
        <div className="w-60 h-full flex items-center justify-center text-white">
            {
                wb
                    ? <span className="font-bold">
                        Masterclass
                    </span>
                    : <>
                        <span>Jueves 17 de Octubre</span>
                        <div className="ml-1">{fecha}</div>
                    </>
            }
        </div>
    </>
}

export default CarrusellBanner