const PRODUCTS = [
  {
    id: 100,
    name: 'Road Bike',
    price: 300,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-52-93.jpg'
  },
  {
    id: 200,
    name: 'Touring',
    price: 200,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-62-99.jpg'
  },
  {
    id: 300,
    name: 'Enduro Bike',
    price: 400,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-34-73.jpg'
  },
  {
    id: 400,
    name: 'Kid bike',
    price: 20,
    previewImageLink: 'https://veloplaneta.com.ua/media/catalog/product/cache/0c35bc1a2ea936bd9c1c17139a73ce74/s/k/skd-66-57.jpg'
  },
];


export const getProductItems = () => {
  return PRODUCTS;
};
