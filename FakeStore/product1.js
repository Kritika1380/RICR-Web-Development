async function getProducts1() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const productList = document.getElementById("productRow1");
    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("row", "p-3", "rounded", "card1", "shadow");
      d.innerHTML = `
          <div class="col-3 h-100">
            <img
              src=${element.image}
              alt=${element.title}
              class="w-100 h-100 object-fit-contain"
            />
          </div>

          <div class="col-9 h-100">
            <div class="fw-bold fs-4">${
              element.title.length > 50
                ? element.title.slice(0, 45) + "..."
                : element.title
            }</div>
            <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
            <div class="fw-bold fs-4">${element.price * 100}</div>
            <div class="mb-2">
              ${element.description.slice(0, 80)}...
            </div>
            <div class="d-flex justify-content-center gap-3">
              <button class="btn btn-outline-primary">Add to Cart</button>
              <button class="btn btn-outline-primary">Buy now</button>
            </div>
          </div>`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}
getProducts1();
