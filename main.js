const data = [
  {
    id: 1,
    name: "Classic Leather Watch",
    price: 55699,
    img: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/r/a/rado-coupole-r22877025-large.jpg",
    cat: "Dress",
  },
  {
    id: 2,
    name: "Sporty Digital Watch",
    price: 9699,
    img: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/t/i/tissot-t-sport-t125-617-33-051-00-22-12-2020-large.jpg",
    cat: "Sport",
  },
  {
    id: 3,
    name: "Elegant  Watch",
    price: 9899,
    img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4040368f/images/Titan/Catalog/1811SL01_2.jpg?sw=800&sh=800",
    cat: "Elegant",
  },
  {
    id: 4,
    name: "Fitness Tracker Watch",
    price: 3099,
    img: "https://m.media-amazon.com/images/I/411CosYM-FL.jpg",
    cat: "Fitness",
  },
  {
    id: 5,
    name: "Digital Smartwatch",
    price: 14999,
    img: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
    cat: "Smart",
  },
  {
    id: 6,
    name: "Luxury Diamond Watch",
    price: 219999,
    img: "https://i.pinimg.com/736x/57/48/14/574814624951afdfb9f91629f322f536.jpg",
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
     <span class="priceText">Price: ₹ ${product.price}</span>
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

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceValue.textContent = "₹" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "₹" + e.target.value;
    displayProducts(data.filter((item) => item.price <= e.target.value));
  });
};

setCategories();
setPrice();
