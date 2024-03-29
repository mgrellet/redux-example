import Uno from "./components/Uno";
import Dos from "./components/Dos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const MyRouter = () => {
    return (
        <>
        <Router>
            <div>
                <Link to="/uno"><button>Ir al uno</button></Link>
                <Link to="/dos"><button>Ir al dos</button></Link>
            </div>
            <Routes>
                <Route path="/uno" element={<Uno />} />
                <Route path="/dos" element={<Dos />} />
            </Routes>
        </Router>
        </>
    );
};

export default MyRouter;
