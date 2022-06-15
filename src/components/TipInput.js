import { nanoid } from "nanoid";

export default function TipInput() {
  const radioButtons = [5, 10, 15, 25, 50].map((amount) => {
    return (
      <div key={nanoid()}>
        <input type="radio" id={`${amount}%`} name="tip" key={nanoid()} />
        <label htmlFor={`${amount}%`} key={nanoid()} className="tip__label">
          {amount}%
        </label>
      </div>
    );
  });

  return (
    <fieldset>
      <legend className="form__legend legend--tip">Select Tip %</legend>
      <div className="tip__inputs">
        {radioButtons}
        <input
          type="number"
          placeholder="Custom"
          className="form__number-input input--custom"
        />
      </div>
    </fieldset>
  );
}
