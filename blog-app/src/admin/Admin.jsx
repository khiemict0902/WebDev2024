import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Admin() {
    return (
      <>
        <NavBar data = {[false, true]} />
        <main>
          <Outlet/>
        </main>
      </>
    );
}

  