import Leftside from "./component/category/Leftside";
import Feed from "./component/feed/Feed";
import Cart from "./component/cart/Cart";


function App() {
  return (
    <div className="flex flex-row relative w-full ">
      <Leftside />
      <Feed />
      <Cart />
    </div>
  );
}

export default App;
