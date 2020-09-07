import React, { useState, useEffect } from "react";
import { useCombobox } from "downshift";
import "./SearchResults.css";
import { storeProducts } from "../../data";
import Product from "../NavbarRoutes/Shirt/Product";

const SearchResults = () => {
  const [inputItems, setInputItems] = useState([]);
  const [products, setProduct] = useState([]);
  const [singleProduct, setSingleProduct] = useState("");
  useEffect(() => {
    const products = [...storeProducts];
    setProduct(products);
  }, []);
  const {
    getInputProps,
    getItemProps,
    getMenuProps,
    getComboboxProps,
    isOpen,
    highlightedIndex,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        products.filter((product) => {
          return product.title
            .toLowerCase()
            .startsWith(inputValue.toLocaleLowerCase());
        })
      );
    },
  });

//   console.log(singleProduct);
  return (
    <div className="searchResults">
      <div className="searchResults__left">
        <h4>Search Here Please :)</h4>
        <div {...getComboboxProps()}>
          <input
            type="text"
            {...getInputProps()}
            placeholder="Search here"
            size="large"
          />
        </div>
        <ul {...getMenuProps()}>
          {isOpen &&
            inputItems
            
              .map((product, index) => (
                <span
                  key={product.id}
                  {...getItemProps({ product, index })}
                  onClick={() => setSingleProduct(product)}
                >
                  <li
                    style={
                      highlightedIndex === index ? { background: "#ede" } : {}
                    }
                  >
                    <h4>{product.title}</h4>
                  </li>
                </span>
              ))}
        </ul>
      </div>

      <div className="searchResults__right">
        {isOpen && <Product product={singleProduct} />}
      </div>
    </div>
  );
};

export default SearchResults;
