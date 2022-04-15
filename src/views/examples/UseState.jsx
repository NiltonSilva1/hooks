import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = () => {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState();
  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio01" />
      <div className="center">
        <span className="text">{contador}</span>
        <div>
          <buttton className="btn" onClick={() => setContador(contador - 1)}>
            -1
          </buttton>
          <buttton className="btn" onClick={() => setContador(contador + 1)}>
            +1
          </buttton>
          
        </div>
      </div>
      <SectionTitle title="Exercicio02" />
      
      <input type="text" className="input" value={nome} onChange={(e) => setNome(e.target.value) } />
      
    </div>
  );
};

export default UseState;
