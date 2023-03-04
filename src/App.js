import Leftside from "./component/Leftside";
import Feed from "./component/Feed";


function App() {
  return (
    <div className="flex flex-row relative w-4/5 ">
      <Leftside />
      <Feed />
    </div>
  );
}

export default App;
