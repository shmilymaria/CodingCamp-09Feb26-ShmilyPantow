window.onload = () => {
  let name = localStorage.getItem("visitorName");

  if (!name) {
    name = prompt("Please enter your name:");
    if (name) localStorage.setItem("visitorName", name);
  }

  document.getElementById("welcomeText").textContent =
    name ? `Hi ${name}, Welcome!` : "Hi there, Welcome!";
};

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const status = document.getElementById("formStatus");

  status.textContent = `Thank you, ${name}! Your message has been sent 🚀`;
  status.style.color = "green";
  e.target.reset();
});
