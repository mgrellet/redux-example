import {useSelector} from "react-redux";

const Dos = () => {
    const currentName = useSelector(state => state.aValue.myName)
    const currenArray= useSelector(state => state.aValue.libs)

    return (
        <>
            <h1>{currentName}</h1>
            {currenArray.map( value =>
                <div key={value.name}>
                    <h1>{value.name}</h1>
                    <h1>{value.date}</h1>
                </div>

            )}
        </>
    );
};
export default Dos
