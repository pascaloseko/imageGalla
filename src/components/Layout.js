import { useContext } from "react";
import { Context } from "../context/fireStoreContext";
import Navbar from "./Navbar";
import UploadForm from "./UploadForm";

function Layout({ children }) {
  const {state, dispatch} = useContext(Context);
  const toggle = () => dispatch({ type: 'collapse', payload: { bool: !state.isCollapsed}});
    return (
        <>
        <Navbar />
        <div className="container text-center mt-5">
        <button className="btn btn-success float-end" onClick={toggle}>{state.isCollapsed ? 'Close' : '+Add'}</button>
        <div className="clearfix mb-4"></div>
        <UploadForm/>
        {children}
        </div>
        </>
    )
}
export default Layout;