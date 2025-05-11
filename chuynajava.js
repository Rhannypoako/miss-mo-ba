  const form = document.getElementById("topic");

  // Get sender from URL (?user=user1 or ?user=user2)
  const urlParams = new URLSearchParams(window.location.search);
  const sender = urlParams.get("user");
  document.getElementById("sender").value = sender;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const choice = formData.get("choice");
    const sender = formData.get("sender");

    const message =
      choice === "SOBRA" ? "MISS KANA DAW" : "kawawa hindi kana love";

    await fetch("https://script.google.com/macros/s/AKfycbxz7_FQ9kmQevthVhEIB4dmv1DbeaAA5qN9D0eKOePF6rKCWTXpUaXjR5o1_azXcoSv/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, message }),
    });

    alert("Sent! Thank you.");
    form.reset();
  });

