// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// 🌗 Theme Switcher
const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  themeBtn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// 🤖 Simple Chatbot
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

sendBtn.addEventListener("click", () => {
  const userMsg = chatInput.value.trim();
  if (!userMsg) return;

  appendMessage("You", userMsg);
  chatInput.value = "";

  // Simple bot response logic
  let botMsg = "Sorry, I didn't understand that.";
  if (userMsg.toLowerCase().includes("hello")) {
    botMsg = "Hello! How can I help you?";
  } else if (userMsg.toLowerCase().includes("project")) {
    botMsg = "You can check out my projects above in the Projects section.";
  } else if (userMsg.toLowerCase().includes("contact")) {
    botMsg = "Use the contact form or email me!";
  }

  setTimeout(() => {
    appendMessage("Bot", botMsg);
  }, 600);
});

function appendMessage(sender, message) {
  const msgDiv = document.createElement("div");
  msgDiv.textContent = `${sender}: ${message}`;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
