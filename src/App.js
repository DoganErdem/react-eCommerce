import Leftside from "./component/category/Leftside";
import Feed from "./component/feed/Feed";
import Cart from "./component/cart/Cart";


function App() {
  return (
    <div className="flex flex-row relative w-auto  mob:flex-col mob:w-screen">
      <Leftside />
      <Feed />
      <Cart />
    </div>
  );
}

export default App;
