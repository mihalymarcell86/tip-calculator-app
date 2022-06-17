import { useState, useEffect } from "react";
import Header from "./components/Header";
import NumberField from "./components/NumberField";
import TipInput from "./components/TipInput";
import Display from "./components/Display";
import Attribution from "./components/Attribution";

export default function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [selectedOption, setSelectedOption] = useState({ value: 0, type: "" });

  const [total, setTotal] = useState(0);
  const [tipTotal, setTipTotal] = useState(0);
  const [resetIsDisabled, setResetIsDisabled] = useState(true);

  useEffect(() => {
    const resultTip = ((bill / 100) * selectedOption.value) / people;
    const resultTotal = bill / people + resultTip;
    setTotal((isFinite(resultTotal) ? resultTotal : 0).toFixed(2));
    setTipTotal((isFinite(resultTip) ? resultTip : 0).toFixed(2));
  }, [bill, people, selectedOption]);

  function changeBill({ target }) {
    setBill(+target.value);
    setResetIsDisabled(false);
  }

  function changePeople({ target }) {
    setPeople(target.value);
    setResetIsDisabled(false);
  }

  function changeTipOption(option) {
    setSelectedOption(option);
    setResetIsDisabled(false);
  }

  function reset() {
    setBill("");
    setSelectedOption({ value: 0, type: "" });
    setPeople("");
    setResetIsDisabled(true);
  }

  return (
    <>
      <Header />
      <main className="main">
        <form className="input-form" noValidate>
          <NumberField name="Bill" onChange={changeBill} value={bill} />
          <TipInput
            onChangeOption={changeTipOption}
            selectedOption={selectedOption}
          />
          <NumberField
            name="Number of People"
            onChange={changePeople}
            value={people}
          />
        </form>
        <Display
          total={total}
          tip={tipTotal}
          resetDisabled={resetIsDisabled}
          onReset={reset}
        />
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
