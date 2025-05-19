import './App.css';
import { CircleLoading } from './icons/LoadingIcons';
import Button from './ui/Button';
function App() {
 return (
  <>
  <Button textColor="#ddd" fontSize="1rem" textCase='capital' disabled={true} onClick={() => console.log("Hello Adam")}>hello adam</Button>
  <Button icon={<CircleLoading/>} textColor="#ddd" fontSize="1rem" textCase='capital' onClick={() => console.log("Hello Adam")} allow_repeat={true} repeat={3} allow_timer={true} timer={5000}>hello adam</Button>
  </>
 )
}

export default App
