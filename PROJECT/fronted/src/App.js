import { Link, Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import './App.css'

function App() {


  return (
    <div>
      <div style={{display: 'flex', gap: '50px'}}>
          <Link to={'/products/all'}><h2>All products</h2></Link>
          <Link to={'/products/sale'}><h2>Sales products</h2></Link>
          <Link to={'/category/1'}><h2>Categories 1</h2></Link>
          <Link to={'/category/2'}><h2>Categories 2</h2></Link>
          <Link to={'/category/3'}><h2>Categories 3</h2></Link>
          <Link to={'/category/4'}><h2>Categories 4</h2></Link>
          <Link to={'/category/5'}><h2>Categories 5</h2></Link>
      </div>
      <Routes>
        <Route path="category/:id" element={<ProductListPage type='category'/>}/>
        <Route path="products/all" element={<ProductListPage type='all'/>}/>
        <Route path="products/sale" element={<ProductListPage type='sale'/>}/>
      </Routes>
    </div>
  );
}

export default App;
