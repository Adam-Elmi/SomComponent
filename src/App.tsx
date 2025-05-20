import "./App.css";
import ArrowIcon from "./icons/ArrowIcon";
import Button from "./ui/Button";
function App() {
  return (
    <>
      <Button
        textColor="#ddd"
        fontSize="1rem"
        textCase="capital"
        disabled={true}
        onClick={() => console.log("Hello Adam")}
      >
        hello adam
      </Button>
      <Button
        icon={<ArrowIcon />}
        icon_position="right"
        textColor="#ddd"
        fontSize="1rem"
        textCase="capital"
        onClick={() => console.log("Hello Adam")}
        allow_repeat={true}
        repeat={1}
        allow_timer={true}
        timer={2000}
        disabled_text="Sending! Please wait"
        style={{height: "50px"}}
      >
        Send message
      </Button>
    </>
  );
}

export default App;
