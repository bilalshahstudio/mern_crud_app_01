import "./App.css";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/cruds/Create";
import Read from "./components/cruds/Read";
import Update from "./components/cruds/Update";
import HomePage from "./components/pages/HomePage";
import TableView from "./components/cruds/TableView";
import GridView from "./components/cruds/GridView";
import ListView from "./components/cruds/ListView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path="/all" element={<Read />} /> */}
          <Route path="/table-view" element={<TableView />} />
          <Route path="/grid-view" element={<GridView />} />
          <Route path="/list-view" element={<ListView />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
