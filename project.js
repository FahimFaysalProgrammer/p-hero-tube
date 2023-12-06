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

let dataForSort = null;

const displayData = (data) => {
  // console.log(data);
  dataForSort = data;

  if (data.length == 0) {
    // console.log("Oops!! Sorry, There is no content here");
    const boxArea = document.getElementById("items-container");
    boxArea.textContent = "";
    boxArea.innerHTML = `
      <div class="text-center">
      <img class="p-4" src="images/Icon.png" alt="">
      <h1 class="text-center fw-bold">Oops!! Sorry, There is no <br> content here</h1>
      </div>
      
      `;
  } else {
    const itemsContainer = document.getElementById("items-container");
    itemsContainer.textContent = "";

    data.forEach((item) => {
      // console.log(item);
      const totalSeconds = item.others.posted_date;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);

      const card = document.createElement("div");
      card.classList.add("item-card");
      card.innerHTML = `
            <img class="box-img p-0" src=${item?.thumbnail} alt="">
            <div class="time-container bg-black text-end">
            <p class="text-sm text-white pe-4">
                ${
                  item?.others?.posted_date == ""
                    ? ""
                    : hours + "hrs " + minutes + " min ago"
                }</p>
            </div>
            <div class="d-flex gap-3 text-start p-3 align-items-center">
                <img class="w-25 h-25 rounded-circle" src=${
                  item?.authors[0].profile_picture
                } alt="">
                <div class="pt-3">
                  <h4 class="fw-bold m-0">${item?.title}</h4>
                  <div class="text-start">
                    <div class="d-flex gap-3">
                      <p class="m-0">${item.authors[0].profile_name}</p>
                      <p class="text-slate-400 m-0">${
                        item?.authors[0]?.verified == "" ||
                        item?.authors[0]?.verified == false
                          ? ""
                          : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2568EF" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>`
                      }
                      </p>
                    </div>
                    <p class="m-0">${item.others.views} views</p>
                  </div>
                </div>
              </div>
            </div>
            
            `;
      itemsContainer.appendChild(card);
    });
  }
};

// ---------------------------------------------------------------

const sortHandler = () => {
  dataForSort.sort((a, b) => {
    const A = parseFloat(a.others.views.slice(0, -1));
    const B = parseFloat(b.others.views.slice(0, -1));

    return B - A;
  });

  if (dataForSort.length == 0) {
    // console.log("Oops!! Sorry, There is no content here");
    const boxArea = document.getElementById("items-container");
    boxArea.textContent = "";
    boxArea.innerHTML = `
      <div class="text-center">
      <img class="p-4" src="images/Icon.png" alt="">
      <h1 class="text-center fw-bold">Oops!! Sorry, There is no <br> content here</h1>
      </div>
      
      `;
  } else {
    const itemsContainer = document.getElementById("items-container");
    itemsContainer.textContent = "";
    itemsContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2`;

    dataForSort.forEach((item) => {
      // console.log(item);
      const totalSeconds = item.others.posted_date;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);

      const card = document.createElement("div");
      card.classList.add("item-card");
      card.innerHTML = `
            <img class="box-img p-0" src=${item?.thumbnail} alt="">
            <div class="time-container bg-black text-end">
            <p class="text-sm text-white pe-4">
                ${
                  item?.others?.posted_date == ""
                    ? ""
                    : hours + "hrs " + minutes + " min ago"
                }</p>
            </div>
            <div class="d-flex gap-3 text-start p-3 align-items-center">
                <img class="w-25 h-25 rounded-circle" src=${
                  item?.authors[0].profile_picture
                } alt="">
                <div class="pt-3">
                  <h4 class="fw-bold m-0">${item?.title}</h4>
                  <div class="text-start">
                    <div class="d-flex gap-3">
                      <p class="m-0">${item.authors[0].profile_name}</p>
                      <p class="text-slate-400 m-0">${
                        item?.authors[0]?.verified == "" ||
                        item?.authors[0]?.verified == false
                          ? ""
                          : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#2568EF" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>`
                      }
                      </p>
                    </div>
                    <p class="m-0">${item.others.views} views</p>
                  </div>
                </div>
              </div>
            </div>
            
            `;
      itemsContainer.appendChild(card);
    });
  }
};




loadAllData();