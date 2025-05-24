import "./App.css";
// import ArrowIcon from "./icons/ArrowIcon";
import SmartButton from "./components/Button";
import { useEffect, useState } from "react";
// import SmartHeader from "./components/Header";
import SmartLink from "./components/Link";
function App() {
  const [fetchData, setFetchData] = useState<[]>([]);
  const [checkState, setCheckState] = useState<boolean>(false);
  useEffect(() => {
    function fetchUser() {
      fetch("https://api.github.com/users/Adam-Edlmi")
        .then((res) => {
          if (res.ok) {
            setCheckState(false);
            return res.json();
          } else {
            setCheckState(true);
          }
        })
        .then((data) => {
          console.log(data);
          setFetchData(data);
        });
    }
    const btn = document.getElementById("btn");
    if (btn) {
      btn.addEventListener("click", fetchUser);
    }
  }, [fetchData, checkState]);
  console.log(checkState);
  return (
    <>
      <SmartButton
        id="btn"
        textCase="capital"
        disabled={checkState}
        disabled_text="Failed to fetch data!"
        onClick={() => console.log("Hello Adam")}
      />

      <SmartButton
        variant="multi"
        label="My projects"
        icon_position="right"
        textCase="capital"
        onClick={() => console.log("Hello Adam")}
        
      />
      {/* <SmartHeader/> */}
      <SmartLink
        text="Learn more what Node.js"
        icon_position="right"
        link_title="SomCheat"
        variant="descriptive"
        show_arrow={true}
      />
    </>
  );
}

export default App;
