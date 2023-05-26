import { useMemo, useContext, useEffect } from "react";
import Card from "./components/Card"
import Layout from "./components/Layout";
import { Context } from "./context/fireStoreContext";
import "./App.css";


function App() {
  const {state, read} = useContext(Context)

  const count = useMemo(() => {
    return `you have ${state.items.length} image${state.items.length > 1 ? 's' : ''}`
  }, [state.items])

  useEffect(() => {
    read()
  }, [read]);

  return (
        <Layout>
        <h1>Gallery</h1>
        {count}
        <div className="row">
          {state.items.map((item, index) => <Card key={index} {...item} />)}
        </div>
      </Layout>
    
  );
}

export default App;
