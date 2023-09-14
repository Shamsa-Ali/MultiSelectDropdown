import "./styles.css";
import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
function App() {
  const [productOptions1, setProductOptions1] = useState([]);
  const [product1, setProduct1] = useState([]);

  useEffect(() => {
    // Assuming productsData is an array of all available products
    // and products_id is a string like "3,2,1"
    const productsData = [
      { value: 1, label: "Product 1" },
      { value: 2, label: "Product 2" },
      { value: 3, label: "Product 3" }
      // ... (other products)
    ];
    const products_id = "3,2";

    // Create an array of selected product values based on products_id
    const selectedProductValues = products_id.split(",").map(Number);

    // Filter the available products to get only the selected ones
    const selectedProducts = productsData.filter((product) =>
      selectedProductValues.includes(product.value)
    );

    // Set productOptions1 to include all products
    setProductOptions1(productsData);

    // Set product1 to include the selected products
    setProduct1(selectedProducts);
  }, []);

  return (
    <>
      {console.log("product1", product1)}
      <MultiSelect
        style={{ width: "100%" }}
        label="Select Product"
        options={productOptions1}
        value={product1}
        onChange={setProduct1}
        isClearable={true}
        labelledBy="Select"
      />
    </>
  );
}

export default App;
