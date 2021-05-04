class Product {
  constructor(
    id,
    title,
    description,
    price,
    type,
    urlImg,
    timeLeft,
    createdAt
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.type = type;
    this.urlImg = urlImg;
    this.timeLeft = timeLeft;
    this.createdAt = createdAt;
  }
}

module.exports = Product;
