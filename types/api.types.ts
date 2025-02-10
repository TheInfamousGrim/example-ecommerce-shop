//#region Products
export type Product = {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string;
  };
  variants: {
    edges: {
      node: {
        price: {
          amount: string;
          currencyCode: string;
        };
        image: {
          id: string;
          url: string;
          altText: string;
          height: number;
          width: number;
        };
      };
    }[];
  };
};

export type MultipleProductsResponse = {
  data: {
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
};

export type SingleProductResponse = {
  data: {
    product: Product;
  };
};

//#endregion
