export default function App() {

  const onClick = () => {

    const onPlusNumber = () => {
      return setNumber ()
    }

    const onMinusNumber = () => {
      return 
    }

  }

  const [plus, setPluse] = useState(0);
  const [minus, setMinus] = useState(0);
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input type="number" /> 만큼을{" "}
        <button onClick={() => onPlusNumber()}>더할게요</button>{" "}
        <button onClick={() => onMinusNumber()}>뺄게요</button>
        <button>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>0</p>
      </div>
    </div>
  );
}
