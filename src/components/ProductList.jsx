import { memo } from "react";

function ProductList({ products }) {
  console.log("ProductList Rendered");
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}

export default memo(ProductList);
