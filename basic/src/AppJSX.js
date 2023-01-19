import "./App.css";

function AppJSX() {
  const name = "현화";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>{name}</h2>
      <ul>
        {/* <li>우유</li>
        <li>딸기</li>
        <li>바나나</li> */}
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
