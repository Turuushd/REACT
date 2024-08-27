import { Option } from "./bagshiih/option";
import { ProductCard } from "./bagshiih/product-card";

export default async function Home() {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json();
  const {products} = data;

  const res = await fetch("https://dummyjson.com/products/categories")
  const list = await res.json();

  for (let i = 0; i < data.length; i++){
    console.log(data[i])
  }
  
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
              
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}