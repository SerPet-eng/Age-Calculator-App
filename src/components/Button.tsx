import Icon from '../../assets/images/icon-arrow.svg';

export default function Button() {
  return (
    <>
      <div className="main_button">
        <div className="line"></div>
        <button className="button">
          <img src={Icon} alt="A Button" />
        </button>
      </div>
    </>
  );
}
