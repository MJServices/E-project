document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector("i");

    question.addEventListener("click", function () {
      // Close other open items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = null;
          otherItem.querySelector("i").style.transform = "rotate(0deg)";
        }
      });

      // Toggle current item
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      } else {
        answer.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
      }
    });
  });
});
