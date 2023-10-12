const quote = document.querySelector(".quote");
const rollBtn = document.querySelector(".roll");
const url = "https://api.kanye.rest";

rollBtn.addEventListener("click", async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.quote);
  quote.innerHTML = data.quote;
});
