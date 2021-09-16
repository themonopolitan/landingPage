import { info } from "autoprefixer"

const Form = () => {

    const inputsInfo = [
        {
            id: 'name',
            placeholder: 'Tu nombre',
            type: 'text',
            name: 'Nombre'
        },
        {
            id: 'email',
            placeholder: 'Tu email',
            type: 'text',
            name: 'Correo Electrónico'
        },
        {
            id: 'tel',
            placeholder: 'Tu Whatsapp',
            type: 'tel',
            name: 'Whatsapp'
        },
    ]

    return <>
        <div className="w-2/4 mt-10">
            <div className="p-6 shadow-xl bg-white w-full flex flex-col justify-between">
                <span className="center-X mb-3">Regístrare a la Masterclass</span>
                <div>
                    {
                        inputsInfo.map((info) => <CustomInput
                            id={info.id}
                            placeholder={info.placeholder}
                            type={info.type}
                            name={info.name}
                        />)
                    }
                </div>
                <div className="center-X">
                    <button className="bg-secondary text-white p-8 py-3">
                        Enviar registro
                    </button>
                </div>
            </div>
        </div>
    </>
}

export const CustomInput = ({ id, placeholder, type, color, solo }) => {

    return <>
        <div className="grid grid-cols-8 gap-2">
            <input
                className={`col-span-5 bg-transparent border-2 border-gray-400 text-center p-1 text-gray-800 outline-none text-sm ${solo ? 'mb-00' : 'mb-10'}`}
                id={id}
                placeholder={placeholder}
                type={type}
            />
            <button className={`${color} bg-secondary text-white p-3 py-4 text-sm col-span-3 hover:bg-red-400 focus:outline-none `}>
                Apúntate
            </button>
        </div>
    </>
}

export default Form