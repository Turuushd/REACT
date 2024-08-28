import { Option } from "./bagshiih/option";
import { ProductCard } from "./bagshiih/product-card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json();
  const {products} = data;

  const res = await fetch("https://dummyjson.com/products/categories")
  const list = await res.json();
  
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <select name="" id="">
              <option value="">Select category...</option>
              {list.map((cate) => (
                <Option cate={cate}/>
              ))};
            </select>
            <div className="row">
              {products.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            <div className="pagination">
              <PaginationBtn number="1"/>
              <PaginationBtn number="2"/>
              <PaginationBtn number="3"/>
              <PaginationBtn number="4"/>
              <PaginationBtn number="5"/>
              <PaginationBtn number="6"/>
              <PaginationBtn number="7"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const PaginationBtn = (props) => {
  const {number} = props;
  return (
    <button>{number}</button>
  );
};