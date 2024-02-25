export default function Input() {
  return (
    <>
      <form className="form">
        <div className="input">
          <label htmlFor="day">Day</label>
          <input type="number" name="day" id="day" min="1" max="31" />
        </div>
        <div className="input">
          <label htmlFor="month">Month</label>
          <input type="number" name="month" id="month" min="1" max="12" />
        </div>
        <div className="input">
          <label htmlFor="year">Year</label>
          <input type="number" name="year" id="year" min="1970" max="2099" />
        </div>
      </form>
    </>
  );
}
