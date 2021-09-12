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
        <div className="p-5 shadow-xl bg-white w-full flex flex-col justify-between">
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
    </>
}

const CustomInput = ({ id, placeholder, type, name }) => {

    return <>
        <div className="flex flex-col mx-3.5">
            <label className="text-black text-xs font-light" htmlFor={id}>{name}</label>
            <input
                className="bg-transparent border-b border-black p-1 text-gray-800 outline-none text-sm mb-10"
                id={id}
                placeholder={placeholder}
                type={type}
            />
        </div>
    </>
}

export default Form