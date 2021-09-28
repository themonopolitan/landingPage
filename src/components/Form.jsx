import UseFromInputs from "../hooks/useFormInput"

const Form = () => {

    const inputsInfo = [
        {
            id: 'name',
            placeholder: 'Ingresa tu nombre',
            type: 'text',
            name: 'Nombre'
        },
        {
            id: 'tel',
            placeholder: 'Ingresa tu WhatsApp',
            type: 'tel',
            name: 'Whatsapp'
        },
    ]

    return <>
        <div className="lg:w-2/4 mt-10">
            <div className="w-full p-2 shadow-xl center-Y flex-col justify-between">
                <span className="center-X mb-6 text-xl">Finaliza tu Registro:</span>
                <div className='lg:w-3/4 w-full'>
                    {
                        inputsInfo.map((info) => <CustomInput
                            id={info.id}
                            placeholder={info.placeholder}
                            type={info.type}
                            name={info.name}
                        />)
                    }
                </div>
                <div className="center-X  lg:w-3/4">
                    <button className="bg-secondary text-white p-8 py-3 hover:bg-red-400 duration-300">
                        Completar registro
                    </button>
                </div>
            </div>
        </div>

    </>
}

export const CustomInput = ({ id, placeholder, type, color, solo }) => {
    const email = UseFromInputs()
    return <>
        {/* <form
            action="https://static.mailerlite.com/webforms/submit/o2d0x0" data-code="o2d0x0" method="post" target="_blank"
            className={`${solo && 'mx-5'}  lg:mx-0 grid grid-cols-8 gap-2`} >

            <input
                className={`col-span-8 h-12 bg-transparent border-2 border-gray-400 text-center p-1 text-gray-800 outline-none text-sm ${solo ? 'lg:h-auto mb-00 lg:col-span-5' : 'mb-6 lg:col-span-8'}`}
                id={id}
                placeholder={placeholder}
                type={type}
                {...email}
            />
            <input
                aria-label="email"
                aria-required="true"
                type="email"
                className={`col-span-8 h-12 bg-transparent border-2 border-gray-400 text-center p-1 text-gray-800 outline-none text-sm ${solo ? 'lg:h-auto mb-00 lg:col-span-5' : 'mb-6 lg:col-span-8'}`}
                data-inputmask=""
                name="fields[email]"
                placeholder={placeholder}
                autocomplete="email"
                aria-invalid="false"
            />

            {
                solo &&
                <button
                    type="submit"
                    className={`${color} bg-secondary text-white p-3 py-4 text-sm col-span-8 lg:col-span-3 hover:bg-red-400 duration-300 focus:outline-none `}>
                    Apúntate
                </button>
            }
        </form> */}
        <div class="ml-form-embed"
            data-account="1518328:e5b4d0d6p4"
            data-form="4732148:o2d0x0">
        </div>
    </>
}


export default Form

