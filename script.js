// Animation d'entrée pour le texte du site
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h2");
  const heroCTA = document.querySelector(".hero .cta");

  // Animation texte principal
  heroText.style.opacity = 0;
  heroText.style.transform = "translateY(20px)";
  setTimeout(() => {
    heroText.style.transition = "all 1s ease";
    heroText.style.opacity = 1;
    heroText.style.transform = "translateY(0)";
  }, 200);

  // Animation bouton CTA
  heroCTA.style.opacity = 0;
  heroCTA.style.transform = "scale(0.8)";
  setTimeout(() => {
    heroCTA.style.transition = "all 1s ease";
    heroCTA.style.opacity = 1;
    heroCTA.style.transform = "scale(1)";
  }, 700);
});

// Hover dynamique sur les cartes de jeux
const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
    card.style.transition = "all 0.3s ease";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.2)";
  });
});

// Animation clic sur les boutons de téléchargement
const downloadButtons = document.querySelectorAll("button");

downloadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.95)";
    button.style.transition = "all 0.2s ease";
    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 200);
  });
});

// Animation de navigation (smooth scrolling)
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  });
});