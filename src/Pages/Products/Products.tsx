import React, { useState, useEffect } from "react";
import "./Products.scss";
import Navbar from "../../Components/Navbar/Navbar";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Results from "../../Components/Results/Results";
import Rating from "../../Components/Rating/Rating";
import { Product, fetchProducts } from "../../Data/Data";

interface Filter {
  brand: boolean[];
  rating: boolean[];
  price: boolean[];
}

const Products = () => {
  const [showBrandFilter, showBrand] = useState(false);
  const [showPriceFilter, showPrice] = useState(false);
  const [showRatingFilter, showRating] = useState(false);
  const [products, setProducts] = useState<Product[]>(fetchProducts());
  const [multipleFilters, setFilters] = useState<Filter>({
    brand: [false, false],
    price: [false, false],
    rating: [false, false, false, false, false],
  });

  const [tempProducts, setTempProducts] = useState<Product[]>(
    fetchProducts()
  );

  useEffect(() => {
    setProducts(fetchProducts());
    setTempProducts(fetchProducts());
  }, []);

  useEffect(() => {
    let filteredData: Product[] = [];
    let filter1Applied = false;
    let filter2Applied = false;
    let filter3Applied = false;

    if (multipleFilters.brand.includes(true)) {
      if (multipleFilters.brand[0]) {
        tempProducts.forEach((product) => {
          if (product.productName === "Mango")
            filteredData.push(product);
        });
      }
      if (multipleFilters.brand[1]) {
        tempProducts.forEach((product) => {
          if (product.productName === "H&M")
            filteredData.push(product);
        });
      }
      filter1Applied = true;
    }

    if (multipleFilters.rating.includes(true)) {
      for (let i = 0; i < multipleFilters.rating.length; i++) {
        if (multipleFilters.rating[i]) {
          tempProducts.forEach((product) => {
            if (product.productRating === i + 1) {
              filteredData.push(product);
            }
          });
        }
      }
      filter2Applied = true;
    }

    if (multipleFilters.price[0]) {
      tempProducts.forEach((product) => {
        if (product.productDiscountPrice < 500) {
          filteredData.push(product);
        }
      });
      filter3Applied = true;
    }

    if (multipleFilters.price[1]) {
      tempProducts.forEach((product) => {
        if (
          product.productDiscountPrice >= 1000 &&
          product.productDiscountPrice <= 3000
        ) {
          filteredData.push(product);
        }
      });
      filter3Applied = true;
    }

    if (filter1Applied || filter2Applied || filter3Applied) {
      setProducts(filteredData);
    } else {
      setProducts(tempProducts);
    }
  }, [multipleFilters, tempProducts]);
  console.log(multipleFilters);
  return (
    <div className="products">
      <Navbar />
      <h2>Search Results</h2>
      <div className="filter">
        <div className="filter_container">
          <div className="">
            <div
              onClick={() => showBrand((prev) => !prev)}
              className="dropdown"
            >
              <div className="title">BRAND</div>
              {showBrandFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showBrandFilter && (
              <div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[0] = !updatedFilter[0];
                      setFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>Mango</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.brand[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.brand];
                      updatedFilter[1] = !updatedFilter[1];
                      setFilters({
                        ...multipleFilters,
                        brand: updatedFilter,
                      });
                    }}
                  />
                  <label>H&M</label>
                </div>
              </div>
            )}
          </div>
          <div className="divider"></div>
          <div className="">
            <div
              onClick={() => showPrice((prev) => !prev)}
              className="dropdown"
            >
              <div className="title">PRICE RANGE</div>
              {showPriceFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showPriceFilter && (
              <div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[0] = !updatedFilter[0];
                      setFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>Under 500</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.price[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.price];
                      updatedFilter[1] = !updatedFilter[1];
                      setFilters({
                        ...multipleFilters,
                        price: updatedFilter,
                      });
                    }}
                  />
                  <label>1000 to 3000</label>
                </div>
              </div>
            )}
          </div>
          <div className="divider"></div>
          <div className="">
            <div
              onClick={() => showRating((prev) => !prev)}
              className="dropdown"
            >
              <div className="title">RATINGS</div>
              {showRatingFilter ? (
                <BiChevronUp size={24} />
              ) : (
                <BiChevronDown size={24} />
              )}
            </div>
            {showRatingFilter && (
              <div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[4]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[4] = !updatedFilter[4];
                      setFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{Rating(5)}</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[3]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[3] = !updatedFilter[3];
                      setFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{Rating(4)}</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[2]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[2] = !updatedFilter[2];
                      setFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{Rating(3)}</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[1]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[1] = !updatedFilter[1];
                      setFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{Rating(2)}</label>
                </div>
                <div className="label">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    checked={multipleFilters.rating[0]}
                    onChange={() => {
                      const updatedFilter = [...multipleFilters.rating];
                      updatedFilter[0] = !updatedFilter[0];
                      setFilters({
                        ...multipleFilters,
                        rating: updatedFilter,
                      });
                    }}
                  />
                  <label>{Rating(1)}</label>
                </div>
              </div>
            )}
          </div>
        </div>
        <Results products={products} />
      </div>
    </div>
  );
};

export default Products;
