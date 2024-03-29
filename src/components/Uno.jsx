import {useDispatch, useSelector} from "react-redux";
import {addElement, editArrayObj, removeElement, saveName, sum} from "../store/mySlices";

const Uno = () => {
    const dispatch = useDispatch();
    const currentName = useSelector(state => state.aValue.myName)
    const counter = useSelector(state => state.otherValue.counter)

    const edit = () => {
        dispatch(saveName('Martin Grellet'))
    }

    const sumNum = () => {
        dispatch(sum())
    }

    const editArray = () => {
        const obj = {
            idx: 0,
            newName: "Reactjs",
            newDate: 2014
        }
        dispatch(editArrayObj(obj))
    }

    const add = () => {
        const obj = {
            newName: "Angular",
            newDate: 2016
        }
        dispatch(addElement(obj))
    }

    const remove = () => {
        dispatch(removeElement("Angular"));
    }

    return (
        <>
            <h1>{currentName}</h1>
            <button onClick={edit}>edit name</button>

            <h1>{counter}</h1>
            <button onClick={sumNum}>counter</button>
            <button onClick={editArray}>edit array value</button>
            <button onClick={add}>Add element</button>
            <button onClick={remove}>remove new element</button>

        </>
    );
}

export default Uno;
