import "./App.css";
import ArrowIcon from "./icons/ArrowIcon";
import SmartButton from "./components/Button";
function App() {
  return (
    <>
      <SmartButton
        textCase="capital"
        disabled={true}
        onClick={() => console.log("Hello Adam")}
      />

      <SmartButton
        label="Send me"
        icon={<ArrowIcon />}
        icon_position="right"
        textCase="capital"
        onClick={() => console.log("Hello Adam")}
        rules={{wait: 1, maxClicks: 2}}
        disabled_text="Sending! Please wait"
        style={{ height: "50px" }}
      />
    </>
  );
}

export default App;
