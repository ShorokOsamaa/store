import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Categories from "./Categories.js";
import { useEffect, useState } from "react";
import Category from "./Components/Category";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const cards = products.map((item) => <Card key={item.id} item={item} />);

  /// Categories
  const categoriesCards = Categories.map((item) => (
    <Category key={item.id} item={item} />
  ));
  console.log(categoriesCards);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />

        <h1 className="header--title">
          <strong>Browse The Range</strong>
        </h1>
        <p className="header--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <section className="cards-categories">{categoriesCards}</section>

        <h1 className="products--title">
          <strong>Our products</strong>
        </h1>

        <section className="cards-list">{cards}</section>
      </div>
    </div>
  );
}

export default App;
