const Figuritas = ({ color, position, img, size, padding }) => {

    return <>
        <div className={`${position ? "absolute " : 'w-52 '}${position}`}>
            <div className={`relative h-${size} w-${size} rounded-full overflow-hidden p-${padding} centers`}>
                <div className={`absolute rounded-full h-full w-full ${color} centers`} />
                <div className={(img && '') + " sticky h-full w-full rounded-full bg-primary centers"} >
                    {
                    img && 
                    <div className="box-content rounded-full h-5/6 w-5/6 overflow-hidden">
                        <img src={img} alt="" className="h-44" />
                    </div>
                    }
                </div>
            </div>
        </div>

    </>
}
export default Figuritas;