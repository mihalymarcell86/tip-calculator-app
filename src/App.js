import Header from "./components/Header";
import NumberField from "./components/NumberField";
import TipInput from "./components/TipInput";
import Display from "./components/Display";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <form className="input-form">
          <NumberField name="Bill" />
          <TipInput />
          <NumberField name="Number of People" />
        </form>
        <Display />
      </main>
    </>
  );
}
