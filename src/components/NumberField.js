export default function NumberInput(props) {
  return (
    <fieldset
      className={`${props.name === "Bill" ? "icon-dollar" : "icon-person"}`}
    >
      <legend className="form__legend">{props.name}</legend>
      <input
        type="number"
        className={`form__number-input${
          props.name === "Number of People" ? " input--people" : ""
        }`}
        placeholder="0"
      ></input>
    </fieldset>
  );
}
