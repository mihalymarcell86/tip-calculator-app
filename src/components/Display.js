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

export default function Display(props) {
  return (
    <div className="display">
      <Result name="Tip Amount" amount={`$${props.tip}`} />
      <Result name="Total" amount={`$${props.total}`} />
      <button
        className="display__button"
        disabled={props.resetDisabled}
        onClick={props.onReset}
      >
        Reset
      </button>
    </div>
  );
}
