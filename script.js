const products = [
  { name: "Bamboo Toothbrush", price: "₹99" },
  { name: "Organic Cotton Bag", price: "₹149" },
  { name: "Reusable Water Bottle", price: "₹299" }
];

const productList = document.querySelector('.product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: ${product.price}</p>
    <button>Buy Now</button>
  `;
  productList.appendChild(card);
});
