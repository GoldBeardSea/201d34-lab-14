'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = document.getElementById('cart');
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++)
  // TODO: Create a TR
    var trElement = document.createElement('tr');

  // TODO: Create a TD for the delete link, quantity,  and the item
  var deleteLink = document.createElement('td');
  quantity.textContent = 'Delete From Cart';
  // tdElement.textContent = 'Delete Link';
  // trElement.appendChild(tdElement);
  // tdElement.textContent = Cart.quantity[i];
  // trElement.appendChild(tdElement);
  // tdElement.textContent = Cart.item[i];
  // trElement.appendChild(tdElement);
  var quantity = document.createElement('td');
  quantity.textContent = Cart.quantity[i];
  var item =document.createElement('td');
  quantity.textContent = Cart.item[i];





  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  trElement.appendChild(tableBody);
  deleteLink.appendChild(trElement);
  quantity.appendChild(trElement);
  item.appendChild(trElement);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
