import React from "react";
import ProductPage from "./pages/ProductPage";
import Counter from "./components/Counter";
import Input from "./components/Input";
import List from "./components/List";
function App() {
  return (
    <div>
      <List />
      <span>빈칸</span>
      <Input />
      <span>빈칸</span>
      <Counter />
      <span>빈칸</span>
      <ProductPage />
    </div>
  );
}
export default App;
