import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_DATA = [
  {
    id: "d1",
    price: 5,
    title: "Meal",
    description: "My first meal i have ever made",
  },
  {
    id: "d2",
    price: 8,
    title: "Second Meal",
    description: "My second meal i have ever made",
  },
  {
    id:'d3',
    price:10,
    title:'Third Meal',
    description:'My third meal i have ever made'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) =>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
