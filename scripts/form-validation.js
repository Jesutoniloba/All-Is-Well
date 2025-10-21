// Select form and messages
const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // stop default browser reload

  // Get trimmed values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // Clear previous messages
  errorMsg.textContent = "";
  successMsg.textContent = "";
  errorMsg.style.opacity = "1";
  successMsg.style.opacity = "1";

  // Validation: all fields required
  if (name === "" || email === "" || subject === "" || message === "") {
    errorMsg.textContent = "Please fill out all fields!";
    fadeOut(errorMsg);
    return;
  }

  // Validation: simple email format
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errorMsg.textContent = "Please enter a valid email address!";
    fadeOut(errorMsg);
    return;
  }

  // Send to Formspree
  try {
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      successMsg.textContent = "✅ Message sent successfully!";
      form.reset();
      fadeOut(successMsg);
    } else {
      errorMsg.textContent = "❌ Failed to send message. Please try again.";
      fadeOut(errorMsg);
    }
  } catch (err) {
    console.error("Form submission error:", err);
    errorMsg.textContent = "⚠️ Network error. Please try again later.";
    fadeOut(errorMsg);
  }
});

// Fade out messages after 3 seconds
function fadeOut(element) {
  setTimeout(() => {
    element.style.opacity = "0";
  }, 3000);
}
