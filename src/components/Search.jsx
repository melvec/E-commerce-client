import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/product/productSlice";

const Search = () => {
  // Get products from the Redux store
  const { products } = useSelector((state) => state.product);

  // State to hold the search query and filtered products
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const dispatch = useDispatch();

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    dispatch(setProducts(filteredProducts));
  };
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Display filtered products */}
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
