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

//#endregion
