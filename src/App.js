import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Semester from "./Pages/Semester";

import CourseLists from "./components/CourseLists";
import AddCurriculam from "./Pages/AddCurriculam";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/semester" element={<Semester />} />
                    <Route path="/courselist" element={<CourseLists />} />
                    <Route path="/curriculam" element={<AddCurriculam />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
