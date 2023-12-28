import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import "./Home.scss";
import background from "../../assets/background_img.png";
import Header from "../../Components/Header/Header";
import {
  LatestTrend,
  fetchLatestTrend,
  fetchSuggestion,
  Suggestions,
} from "../../Data/Data";

const Home = () => {
  const [showSuggestion, setSuggestions] = useState(false);
  const [latestTrends, setLatestTrends] = useState<LatestTrend[]>();
  const [suggestion, setSuggestion] = useState<Suggestions[]>();

  const navigate = useNavigate();

  const getProducts = () => {
    setSuggestions((prev) => !prev);
    setLatestTrends(fetchLatestTrend());
    setSuggestion(fetchSuggestion());
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/products");
  };

  const toProductsPage = () => {
    navigate("/products");
  };

  return (
    <div style={{ backgroundImage: `url(${background})` }} className="home">
      <Header />
      <div className="content">
        <form className="container" onSubmit={onSubmit}>
          <input
            onClick={getProducts}
            type="text"
            className="input"
            placeholder="Search"
          />
          <button className="search_icon">
            <RiSearch2Line size="30" />
          </button>
        </form>
        {showSuggestion && (
          <div className="trends">
            <div className="latest_trend_box">
              <h3>Latest Trends</h3><br />
              <div className="latest_products">
                {latestTrends?.map((product, i) => (
                  <div
                    key={i}
                    className="latest_trend"
                    onClick={toProductsPage}
                  >
                    <img src={product.productImg} alt="" />
                    <div>{product.productName}</div>
                  </div>
                ))}
              </div>
            </div> <br />
            <div>
              <h3>Popular Suggestion</h3>
              <div>
                {suggestion?.map((product, i) => (
                  <div
                    key={i}
                    className="suggestion"
                    onClick={toProductsPage}
                  >
                    {product.productName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
