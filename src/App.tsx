import "./App.css";
import ArrowIcon from "./icons/ArrowIcon";
import SmartButton from "./components/Button";
import { useEffect, useState } from "react";
import { BubbleLoading } from "./icons/LoadingIcons";
// import SmartHeader from "./components/Header";
// import SmartLink from "./components/Link";
function App() {
  const [fetchData, setFetchData] = useState<[]>([]);
  const [checkState, setCheckState] = useState<boolean>(false);
  useEffect(() => {
    function fetchUser() {
    fetch("https://api.github.com/users/Adam-Edlmi")
      .then(res => {
        if(res.ok) {
          setCheckState(false);
          return res.json();
        } else {
          setCheckState(true);
        }
      })
      .then(data => {
        console.log(data);
          setFetchData(data);
      })
    }
    const btn = document.getElementById("btn");
    if(btn) {
      btn.addEventListener("click", fetchUser);
    }
  }, [fetchData, checkState])
  console.log(checkState)
  return (
    <>
      <SmartButton
      id="btn"
        textCase="capital"
        disabled={checkState}
        disabled_text="Fetch data failed!"
        onClick={() => console.log("Hello Adam")}
      />

      <SmartButton
      disabled_icon={<BubbleLoading/>}
        label="Send me"
        icon={<ArrowIcon />}
        icon_position="right"
        textCase="capital"
        onClick={() => console.log("Hello Adam")}
        rules={{wait: 1, maxClicks: 2}}
        disabled_text="Sending! Please wait"
        style={{ height: "50px" }}
      />
      {/* <SmartHeader/> */}
      {/* <SmartLink
        text="Learn more what Node.js"
        icon_position="right"
        link_title="SomCheat"
        variant="descriptive"
      /> */}
    </>
  );
}

export default App;
