const form = document.getElementById("topic");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const choice = formData.get("choice");

  const message =
    choice === "SOBRA" ? "MISS KANA DAW" : "kawawa hindi kana love";

  await fetch("https://script.google.com/macros/s/AKfycbzofLH6E2_sKm8tWB8kPl5d33NbPxiZFDq_tQQGBf3NVk5O_-y0rtUYysdLJMVq77dw/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  alert("Sent! Thank you.");
  form.reset();
});