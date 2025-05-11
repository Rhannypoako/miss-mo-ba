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

    await fetch("https://script.google.com/macros/s/AKfycbz0dlvXQfoum7GzphsMhTf_eO5J9PRennu3AfsKrWtyWHqfGPCw5ze0NHR0zSJL9fze/exec", {
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

