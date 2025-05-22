import "./App.css";
import ArrowIcon from "./icons/ArrowIcon";
import SmartButton from "./components/Button";
import SmartHeader from "./components/Header";
import SmartLink from "./components/Link";
function App() {
  return (
    <>
      {/* <SmartButton
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
      /> */}
      {/* <SmartHeader/> */}
      <SmartLink
        text="Learn more what Node.js"
        icon_position="right"
        link_title="SomCheat"
      />
    </>
  );
}

export default App;
