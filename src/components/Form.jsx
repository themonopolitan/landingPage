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
        <div className="p-5 shadow-xl m-3 bg-white ">
            <span className="center-X mb-3">Regístrare a la Masterclass</span>
            {
                inputsInfo.map((info) => <CustomInput
                    id={info.id}
                    placeholder={info.placeholder}
                    type={info.type}
                    name={info.name}
                />)
            }
        </div>
    </>
}

const CustomInput = ({ id, placeholder, type, name }) => {

    return <>
        <div className="flex flex-col mx-3.5">
            <label className="text-black text-xs font-light" htmlFor={id}>{name}</label>
            <input className="bg-transparent border-b border-black p-1 text-gray-800  text-sm mb-3" id={id} placeholder={placeholder} type={type} />
        </div>
    </>
}

export default Form