import style from "../../styles/physicallydisabled/page.module.scss";
export default function Home() {
  return (
    <>
      <div className={`${style.dashboard}`}>
        <button  className={`${style.button}`}>Hello</button>
      </div>
    </>
  );
}
