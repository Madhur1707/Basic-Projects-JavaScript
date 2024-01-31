const data = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 99.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "dress",
  },
  {
    id: 2,
    name: "Sporty Digital Watch",
    price: 129.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "Sport",
  },
  {
    id: 3,
    name: "Elegant Gold Watch",
    price: 179.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "Elegant",
  },
  {
    id: 4,
    name: "Fitness Tracker Watch",
    price: 89.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "Fitness",
  },
  {
    id: 5,
    name: "Digital Smartwatch",
    price: 149.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "Smart",
  },
  {
    id: 6,
    name: "Luxury Diamond Watch",
    price: 299.99,
    img: "https://images.pexels.com/photos/5058216/pexels-photo-5058216.jpeg?auto=compress&cs=tinysrgb&w=400",
    cat: "Luxury",
  },
];

const productContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".categories");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const displayProducts = (filteredProducts) => {
  productContainer.innerHTML = filteredProducts
    .map((product) => {
      return `<div class="product">
      <img src=${product.img} />
      <span class="name">${product.name}</span>
     <span class="priceText">${product.price}</span>
    </div>`;
    })
    .join("");
};

displayProducts(data);

searchInput.addEventListener("keyup", (e) => {
  const value = e.target.value.toLowerCase();

  if (value) {
    displayProducts(
      data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
    );
  } else {
    displayProducts(data);
  }
});

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  const categories = [
    "All",
    ...allCats.filter((item, i) => {
      return allCats.indexOf(item) === i;
    }),
  ];

  categoriesContainer.innerHTML = categories
    .map(
      (cat) =>
        `<span class="category" onclick="filterByCategory('${cat}')">${cat}</span>`
    )
    .join("");

  categoriesContainer.addEventListener("click", (e) => {
    const selectedCat = e.target.textContent;
    selectedCat === "All"
      ? displayProducts(data)
      : displayProducts(data.filter((item) => item.cat === selectedCat));
  });
};

setCategories();

