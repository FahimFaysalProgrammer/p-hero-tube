const loadAllData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    //  .then(data => console.log(data.data))
    .then((data) => displayData(data.data));
};
const loadMusicData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1001")
    .then((res) => res.json())
    //  .then(data => console.log(data.data))
    .then((data) => displayData(data.data));
};
const loadComedyData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1003")
    .then((res) => res.json())
    //  .then(data => console.log(data.data))
    .then((data) => displayData(data.data));
};
const loadDrawingData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1005}")
    .then((res) => res.json())
    //  .then(data => console.log(data.data))
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
  // console.log(data);
  if (data.length == 0) {
    // console.log("Oops!! Sorry, There is no content here");
    const boxArea = (document.getElementById("items-container").innerHTML = `
    <div class="text-center">
    <img class="p-4" src="images/Icon.png" alt="">
    <h1 class="text-center fw-bold">Oops!! Sorry, There is no <br> content here</h1>
    </div>
    
    `);
  } else {
    const itemsContainer = document.getElementById("items-container");

    data.forEach((item) => {
      console.log(item);
      const card = document.createElement("div");
      card.classList.add("item-card");
      card.innerHTML = `
            <img class="box-img rounded p-0" src=${item?.thumbnail} alt="">
            <div class="d-flex gap-3 text-start p-3 align-items-center">
                <img class="w-25 h-25 rounded-circle" src=${item?.authors[0].profile_picture} alt="">
                <div class="pt-3">
                  <h4 class="fw-bold m-0">${item?.title}</h4>
                  <div class="text-start">
                  <p class="m-0">${item.authors[0].profile_name}</p>
                  <p class="m-0">${item.others.views} views</p>
                </div>
              </div>
            </div>
            
            `;
      itemsContainer.appendChild(card);
    });
  }
  document.getElementById("items-container").value = "";
};

// loadAllData();

// loadData("a");
