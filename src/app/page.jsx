import { Card } from "./bagshiih/card";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <Card title="My Portfolio Item #1" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
              <Card title="My Portfolio Item #2" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
              <Card title="My Portfolio Item #3" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
              <Card title="My Portfolio Item #4" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
              <Card title="My Portfolio Item #5" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
              <Card title="My Portfolio Item #6" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellendus fuga, temporibus veniam fugiat quia sint nam harum minima provident." btn="Read more"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}