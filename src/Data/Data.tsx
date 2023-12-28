import { faker } from "@faker-js/faker";

export interface LatestTrend {
  productImg: string;
  productName: string;
}

export interface Suggestions {
  productName: string;
}

export interface Product {
  productImg: string;
  productName: string;
  productRating: number;
  productActualPrice: number;
  productDiscountPrice: number;
  productsReviews: number;
}

export const fetchLatestTrend = () => {
  const latestTrends: LatestTrend[] = [];

  for (let i = 1; i <= 5; i++) {
    latestTrends.push({
      productImg: faker.image.people(300, 400, true),
      productName: faker.commerce.productName(),
    });
  }

  return latestTrends;
};

export const fetchSuggestion = () => {
  const suggestionData: Suggestions[] = [];

  for (let i = 1; i <= 5; i++) {
    suggestionData.push({
      productName: faker.commerce.productName(),
    });
  }

  return suggestionData;
};

export const fetchProducts = () => {
  const products: Product[] = [];

  for (let i = 0; i <= 30; i++) {
    const productImg = faker.image.url({
      height: 400,
      width: 300,
    });
    const productName = faker.commerce.productName();
    const productRating = faker.number.int({ min: 1, max: 5 });
    const productActualPrice = Number(
      faker.commerce.price({ min: 300, max: 5000 })
    );
    const productDiscountPrice = Number(
      faker.commerce.price({
        min: 300,
        max: Number(productActualPrice),
      })
    );
    const productsReviews = faker.number.int({ min: 10, max: 50 });

    products.push({
      productImg,
      productName,
      productRating,
      productActualPrice,
      productDiscountPrice,
      productsReviews,
    });
  }

  return products;
};
