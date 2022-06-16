export default function NumberInput(props) {
  let inputClassName = "form__number-input";
  if (props.name === "Number of People") {
    inputClassName += " input--people";
    if (props.value && Number(props.value) === 0) {
      inputClassName += " input--warning";
    }
  }
  return (
    <div
      className={`form__input-field ${
        props.name === "Bill" ? "icon-dollar" : "icon-person"
      }`}
    >
      <p className="form__legend">
        <span>{props.name}</span>
        {props.name === "Number of People" &&
          props.value &&
          Number(props.value) === 0 && (
            <span className="warning">Can't be zero</span>
          )}
      </p>
      <input
        type="number"
        className={inputClassName}
        placeholder="0"
        value={props.value}
        onChange={props.onChange}
      ></input>
    </div>
  );
}
