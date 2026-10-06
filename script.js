const phone = "553591959723";

const message = [
  "Olá! 💕",
  "",
  "Gostaria de confirmar minha presença no aniversário de 1 ano da Giulia. 👑✨",
  "",
  "Nos vemos no dia 20/03/2027! 🎂"
].join("\n");

const whatsappButton =
  document.getElementById("whatsappButton");

whatsappButton.href =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
