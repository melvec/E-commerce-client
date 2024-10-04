import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/product/productSlice";
import { getProductsAction } from "../redux/product/productActions";

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

    if (query === "") {
      dispatch(getProductsAction());
    }
    // Filter products based on the search query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
    dispatch(setProducts(filtered));
  };
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
