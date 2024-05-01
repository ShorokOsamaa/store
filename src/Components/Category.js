import "../App.css";

function Category(props) {
  return (
    <div className="category-card">
      <img src={props.item.image} alt="IMG" className="card--image" />
      <h3>{props.item.name}</h3>
    </div>
  );
}

export default Category;
