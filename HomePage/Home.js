let total = 0;
let shoppingCartItems = [];

// Load shopping cart items from local storage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedItems = localStorage.getItem('shoppingCartItems');
  const storedTotal = localStorage.getItem('total');

  if (storedItems) {
    shoppingCartItems = JSON.parse(storedItems);
    total = parseFloat(storedTotal) || 0; // Parse storedTotal and default to 0 if NaN
    renderCartItems();
    updateCartUI();
  }
});

function addToCartForm(name, price, quantity) {
  const cartForm = document.getElementById('cart-form');
  const cartItem = document.createElement('div');
  cartItem.classList.add('box');

  cartItem.innerHTML = `
  <div>
    <img src="/img/${name}.png" alt="${name}" />
    <div class="content">
      <h3>${name}</h3>
      <span class="price">$${(price * quantity).toFixed(2)} -</span>
      <span class="quantity">Qty: ${quantity}</span>
    </div>
    <button class="delete-item">
      <img src="/img/close.png" alt="Delete item" style="width: 20px;
      height: 20px;" />
    </button>
    <button class="view-item">View</button>
  </div>
  <br>
`;

  cartForm.appendChild(cartItem);

  // Add event listener to the delete button
  cartItem.querySelector('.delete-item').addEventListener('click', () => {
    removeCartItem(cartItem);
  });

  cartItem.querySelector('.view-item').addEventListener('click', () => {
    window.location.href = '/HappyUser/vegetables.html';
  });
}

function removeCartItem(item) {
  const itemName = item.querySelector('h3').textContent;
  const itemPrice = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
  const itemQuantity = parseInt(item.querySelector('.quantity').textContent.replace('Qty: ', ''));

  // Remove item from shoppingCartItems array
  shoppingCartItems = shoppingCartItems.filter(cartItem => cartItem.name !== itemName);

  // Update total
  total -= itemPrice;
  updateCartUI();

  // Update local storage
  localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
  localStorage.setItem('total', total.toString());

  // Remove item from cartForm
  item.remove();
}

document.querySelectorAll('.add-to-cart').forEach(item => {
  item.addEventListener('click', event => {
    const name = item.getAttribute('data-name');
    const price = parseFloat(item.getAttribute('data-price'));

    addToCart(name, price);
    addToCartForm(name, price, 1); // Add item to the shopping cart form
    updateCartUI();
  });
});

document.getElementById('checkout-btn').addEventListener('click', () => {
  // Show alert message
  alert('You should not buy from different supermarkets');

  // Uncomment the following line if you want to redirect to the ordering page after the alert
  // window.location.href = '/Ordering/Ordering.html';
});

function addToCart(name, price) {
  const existingItem = shoppingCartItems.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    shoppingCartItems.push({ name, price, quantity: 1 });
  }

  total += price;

  // Update local storage
  localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems));
  localStorage.setItem('total', total.toString());
}

function updateCartUI() {
  const cartTotal = document.querySelector('.total');
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function renderCartItems() {
  const cartForm = document.getElementById('cart-form');
  shoppingCartItems.forEach(item => {
    addToCartForm(item.name, item.price, item.quantity);
  });
}

let ShoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
  ShoppingCart.classList.toggle('active');
  Menu.classList.remove('active');
  searchForm.classList.remove('active');
  Login.classList.remove('active');
};

let loginBtn = document.querySelector('#login-btn');
loginBtn.onclick = () => {
  window.location.href = "/Login/LoginPage.html";
};

let Menu = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
  Menu.classList.toggle('active');
  searchForm.classList.remove('active');
  ShoppingCart.classList.remove('active');
  Login.classList.remove('active');
};

window.onscroll = () => {
  Menu.classList.remove('active');
  searchForm.classList.remove('active');
  ShoppingCart.classList.remove('active');
  Login.classList.remove('active');
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    750: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const homeSwiper = new Swiper('.home-slider', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// <----------------Modal------------->
var modal = document.getElementById("myModal");
var btn = document.getElementById("shopNowBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("search-btn").addEventListener("click", function() {
  var formContainer = document.querySelector(".search-form");
  formContainer.style.display = (formContainer.style.display === "none" || formContainer.style.display === "") ? "block" : "none";
});
