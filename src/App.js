
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import ColabForm from "./components/ColabForm.jsx";
import { useState } from "react";
import { BaseColaboradores } from "./modules/database.jsx";
import ColabList from "./components/ColabList.jsx";

function App() {

  const [colab, setColab] = useState(BaseColaboradores);

  const [filter, setFilter] = useState("");

  // return the filtered colab list
  const filteredColab = colab.filter((colab) => {
    return colab.nombre.toLowerCase().includes(filter.toLowerCase());
  });
  
    return (
        <div className="App">

            <Header filter={filter} setFilter={setFilter} />
            <ColabForm colab={colab} setColab={setColab} />
            <ColabList colabs={filteredColab} filter={filter} />
            
            <Footer />
        </div>
    );
}

export default App;
