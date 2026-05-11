const quoteForm = document.querySelector("#quoteForm");

if (window.lucide) {
  window.lucide.createIcons();
} else {
  window.addEventListener("load", () => window.lucide?.createIcons());
}

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(quoteForm);
  const name = formData.get("name")?.toString().trim() || "New customer";
  const phone = formData.get("phone")?.toString().trim() || "Not provided";
  const message = formData.get("message")?.toString().trim() || "No details provided.";

  const subject = encodeURIComponent(`Quote request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\n\nProject details:\n${message}`
  );

  window.location.href = `mailto:bslandservices.tx@gmail.com?subject=${subject}&body=${body}`;
});
