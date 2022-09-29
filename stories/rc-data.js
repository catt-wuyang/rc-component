export const TOGGLE_NAVS = [
  {
    value: "book",
    text: "书",
  },
  {
    value: "movie",
    text: "影",
  },
  {
    value: "music",
    text: "音",
  },
];

export const DEFAULT_TOGGLE_NAV = "movie";

export const MAIN_TYPES = [
  {
    text: "贾樟柯",
    value: 10,
  },
  {
    text: "王家卫",
    value: 12,
  },
  {
    text: "宫崎骏",
    value: 11,
  },
];

export const SUB_TYPES = [
  {
    text: "春光乍泄",
    value: 121,
  },
  {
    text: "一代宗师",
    value: 122,
  },
  {
    text: "花样年华",
    value: 123,
  },
  {
    text: "重庆森林",
    value: 124,
  },
  {
    text: "堕落天使",
    value: 125,
  },
  {
    text: "阿飞正传",
    value: 126,
  },
  {
    text: "旺角卡门",
    value: 127,
  },
];

export const PHOTO_URL = "https://i.ibb.co/rGhfkDZ/IMG-2450.jpg";

export const PRODUCTS = [
  {
    id: "100001",
    can_buy: true,
    stock: 1200,
    title: "麦富迪猫粮",
    sku_props: {
      size_name: "口味",
      color_name: "规格",
      color: ["1.5kg", "10kg"],
      size: ["金枪鱼", "三文鱼", "鸡肉", "吞拿鱼"],
    },
    skus: [
      {
        id: "100011",
        title: "麦富迪猫粮",
        can_buy: true,
        stock: 200,
        color: "1.5kg",
        color_name: "规格",
        size: "金枪鱼",
        size_name: "口味",
        price: "36",
        photo: {
          large_url: "",
          normal_url: "",
        },
      },
      {
        id: "100012",
        title: "麦富迪猫粮",
        can_buy: true,
        stock: 200,
        color: "1.5kg",
        color_name: "规格",
        size: "三文鱼",
        size_name: "口味",
        price: "36",
        photo: {
          large_url: "",
          normal_url: "",
        },
      },
      {
        id: "100013",
        title: "麦富迪猫粮",
        can_buy: true,
        stock: 200,
        color: "10kg",
        color_name: "规格",
        size: "鸡肉",
        size_name: "口味",
        price: "129",
        photo: {
          large_url: "",
          normal_url: "",
        },
      },
    ],
  },
  {
    id: "100002",
    title: "JellyCat 小狗毛绒玩偶",
    can_buy: true,
    stock: 7,
    sku_props: {
      color: [],
      size_name: "尺寸",
      color_name: "商品",
      size: ["18cm", "31cm"],
    },
    skus: [
      {
        id: "100021",
        title: "18cm",
        can_buy: true,
        stock: 4,
        color: "",
        color_name: "商品",
        size: "18cm",
        size_name: "尺寸",
        price: "149",
        photo: {
          normal_url: "https://i.ibb.co/rdL6Jvp/Wechat-IMG12.jpg",
          large_url: "https://i.ibb.co/rdL6Jvp/Wechat-IMG12.jpg",
        },
      },
      {
        title: "31cm",
        id: "100022",
        can_buy: true,
        stock: 2,
        color: "",
        color_name: "商品",
        size: "31cm",
        size_name: "尺寸",
        price: "199",
        photo: {
          normal_url: "https://i.ibb.co/7RDmkG6/Wechat-IMG13.jpg",
          large_url: "https://i.ibb.co/7RDmkG6/Wechat-IMG13.jpg",
        },
      },
    ],
  },
  {
    id: "100003",
    title: "三顿半 速溶冷萃拿铁燕麦",
    can_buy: true,
    stock: 200,
    sku_props: {
      color_name: "包装",
      color: ["混合装"],
      size_name: "规格",
      size: ["18颗"],
    },
    skus: [
      {
        title: "三顿半 速溶冷萃拿铁燕麦",
        id: "100031",
        stock: 200,
        color: "混合装",
        color_name: "包装",
        size: "18颗",
        size_name: "规格",
        price: "89",
        can_buy: true,
        photo: {
          large_url: "https://i.ibb.co/GCJ8YfS/141663922620-pic.jpg",
          normal_url: "https://i.ibb.co/GCJ8YfS/141663922620-pic.jpg",
        },
      },
    ],
  },
  {
    id: "100004",
    title: "MUJI 头绳发圈",
    can_buy: true,
    stock: 400,
    sku_props: {
      color_name: "颜色",
      color: ["黑色"],
      size_name: "规格",
      size: ["1个装", "3个装"],
    },
    skus: [
      {
        title: "MUJI 头绳发圈",
        id: "100041",
        stock: 10,
        color: "黑色",
        color_name: "颜色",
        size: "1个装",
        size_name: "规格",
        price: "10",
        can_buy: true,
        photo: {
          large_url: "https://i.ibb.co/xh0XHLY/151663923303-pic.jpg",
          normal_url: "https://i.ibb.co/xh0XHLY/151663923303-pic.jpg",
        },
      },
      {
        id: "100042",
        can_buy: true,
        title: "MUJI 头绳发圈",
        stock: 4,
        color: "黑色",
        color_name: "颜色",
        size: "3个装",
        size_name: "规格",
        price: "20",
        photo: {
          large_url: "https://i.ibb.co/tbftXKL/161663923304-pic.jpg",
          normal_url: "https://i.ibb.co/tbftXKL/161663923304-pic.jpg",
        },
      },
    ],
  },
];
