import { Routes, Route } from "react-router-dom";
import Home from "../src/routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Navigation />} />
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
