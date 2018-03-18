var quantity = document.querySelectorAll('.confetto__itemsQuantity');
var addup = document.querySelectorAll('.confetto__addBtn');
var remove = document.querySelectorAll('.confetto__removeBtn');

for (let i = 0; i < addup.length; i++) {
  addup[i].addEventListener('click', function () {
    var count = parseInt(quantity[i].textContent) + 1;
    quantity[i].textContent = count;
  });
  remove[i].addEventListener('click', function () {
    var count = parseInt(quantity[i].textContent) - 1;
    quantity[i].textContent = count;
    if (count < 0) {
      quantity[i].textContent = 0;
    }
  });
}
