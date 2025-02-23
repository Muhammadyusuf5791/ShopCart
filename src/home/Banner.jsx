import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link import qilindi!
import productData from "../products.json";
import SeletedCategory from "../components/SeletedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);

const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData); // ✅ Naming convention to‘g‘riroq

  // Search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase(); // ✅ `toLowerCase()` ni oldindan olish
    setSearchInput(searchTerm);

    // Filtering products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SeletedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch} // ✅ `onClick` emas, `onChange`
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          
          {/* Search results */}
          {searchInput && (
            <ul className="lab-ul">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <li key={product.id}> {/* ✅ `i` emas, `product.id` ishlatish */}
                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                  </li>
                ))
              ) : (
                <li>No products found</li> // ✅ Agar natija bo‘lmasa, userga xabar berish
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
