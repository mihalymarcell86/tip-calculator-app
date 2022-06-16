import { nanoid } from "nanoid";

export default function TipInput(props) {
  const tipOptions = [5, 10, 15, 25, 50].map((amount) => {
    const isSelected =
      props.selectedOption.value === amount &&
      props.selectedOption.type === "option";

    return (
      <div
        key={nanoid()}
        className={`tip__option ${isSelected && " option--selected"}`}
        data-value={amount}
        role="radio"
        aria-checked={isSelected}
        tabIndex="0"
        onClick={changeOption}
        onKeyDown={keyboardSelect}
      >
        {`${amount}%`}
      </div>
    );
  });

  function changeOption({ target }) {
    props.onChangeOption({ value: +target.dataset.value, type: "option" });
  }

  function changeCustom({ target }) {
    props.onChangeOption({ value: target.value, type: "custom" });
  }

  function keyboardSelect(event) {
    if (event.code === "Space") changeOption(event);
  }

  return (
    <fieldset role="radiogroup">
      <legend className="form__legend legend--tip">Select Tip %</legend>
      <div className="tip__inputs">
        {tipOptions}
        <input
          type="number"
          placeholder="Custom"
          className="form__number-input input--custom"
          value={
            props.selectedOption.type === "custom"
              ? props.selectedOption.value
              : ""
          }
          onChange={changeCustom}
        />
      </div>
    </fieldset>
  );
}
