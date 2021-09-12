const Figuritas = ({ color, position }) => {

    return <>
        <div className={"absolute " + position}>
            <div className="relative h-80 w-80 rounded-full overflow-hidden p-8 centers">
                <div className={`absolute rounded-full h-full w-full ${color}`} />
                <div className="sticky h-full w-full rounded-full bg-primary" />
            </div>
        </div>

    </>
}
export default Figuritas;