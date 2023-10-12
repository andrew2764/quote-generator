const title = document.querySelector(".title");
const advice = document.querySelector(".advice");
const rollBtn = document.querySelector(".roll");
const url = "https://api.adviceslip.com/advice";

rollBtn.addEventListener("click", async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.slip);
  title.innerHTML = `Advice #${data.slip.id}`;
  advice.innerHTML = data.slip.advice;
});
