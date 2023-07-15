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
  async function getMenu2() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
      );
      const data = await response.json();
      const limitedData = data.slice(0, 3); // Get the first three items from the data
      renderData(limitedData); // Render the limited data
    } catch (error) {
      console.log("Error fetching menu:", error);
    }
  }
  getMenu2();