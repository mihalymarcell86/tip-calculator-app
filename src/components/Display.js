function Result(props) {
  return (
    <div className="display__result">
      <div>
        <strong className="total">{props.name}</strong>
        <span className="pp">/ person</span>
      </div>
      <div className="display__nums">{props.amount}</div>
    </div>
  );
}

export default function Display() {
  return (
    <div className="display">
      <Result name="Tip Amount" amount="$4.27" />
      <Result name="Total" amount="$32.79" />
      <button className="display__button">Reset</button>
    </div>
  );
}
