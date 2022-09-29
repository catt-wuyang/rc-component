export interface IProduct {
  id?: string;
  title?: string;
  can_buy?: boolean;
  stock?: number;
  skus: Array<ISkuItem>;
  sku_props: {
    color: Array<string>;
    size: Array<string>;
    color_name: string;
    size_name: string;
  };
}

export interface ISkuItem {
  id: string;
  title: string;
  can_buy: boolean;
  stock: number;
  price: string;
  color: string;
  size: string;
  color_name: string;
  size_name: string;
  photo: {
    large_url: string;
    normal_url: string;
  };
}

export interface ISelectedProps {
  [type: string]: string;
}
