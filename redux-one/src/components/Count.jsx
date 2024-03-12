import { useSelector } from "react-redux";
const Count = () => {
    const count = useSelector(state => state);
    return (
        <>
            <div className="card text-white">
                <h1>{ count }</h1>
            </div>
        </>
    )
}

export default Count