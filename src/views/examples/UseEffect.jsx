import React, { useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = () => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [status, setStatus] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    setFatorial(calcFatorial(number));

    // eslint-disable-next-line
  }, [number]);

  useEffect(() => {
    setStatus(num % 2 === 0 ? "par" : "ímpar");
  }, [num]);

  function calcFatorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;

    return calcFatorial(n - 1) * n;
  }

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <span className="text red">{status}</span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
