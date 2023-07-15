const redirectToMenu = function () {
    window.open("menu.html", "_self");
  };
  
  const redirectToHome = function () {
    window.open("index.html", "_self");
  };
  
  const cards = document.querySelector(".cards");
  
  const renderData = function (data) {
    data.map((key) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
            <div>
              <div class="card-image">
                <img src="${key.imgSrc}" alt="cardimage" />
              </div>
              <div class="card-info">
                <div class="info">
                  <p>${key.name}</p>
                  <p>$${key.price}/-</p>
                </div>
                <div class="add-btn">
                  <i class="ri-add-line"></i>
                </div>
              </div>
            </div>
          </div>`
      );
    });
  };
  
  async function getMenu() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
      );
      const data = await response.json();
      renderData(data);
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  }
  
  // Function to take an order
  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Randomly choose 3 burgers
        const burgers = ["Cheeseburger", "Veggie Burger", "Chicken Burger"];
        const order = burgers[Math.floor(Math.random() * burgers.length)];
  
        resolve(order);
      }, 2500);
    });
  }
  
  // Function to prepare the order
  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  
  // Function to pay for the order
  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  
  // Function to display "Thank you" message
  function thankyouFnc() {
    alert("Thank you for eating with us today!");
  }
  
  async function handlePromises() {
    await getMenu();
  
    await takeOrder();
  
    await orderPrep();
  
    await payOrder();
  
    thankyouFnc();
  }
  
  // Wait for the DOM to be fully loaded before executing the code
  document.addEventListener("DOMContentLoaded", () => {
    handlePromises();
  });