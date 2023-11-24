function toggleMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
    var menu = document.getElementById("navMenu");
    menu.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    const resultDiv = document.getElementById('result');
  
    orderForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Отримання даних з форми
      const formData = new FormData(orderForm);
  
      // Ваш код для обробки форми, наприклад, відправка даних на сервер за допомогою AJAX або Fetch
  
      // Приклад виведення результату на сторінці
      resultDiv.innerHTML = '<p>Замовлення успішно відправлено!</p>';
    });
  });
  



