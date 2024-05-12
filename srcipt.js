// const plusBtn = document.querySelectorAll(".plus-icon");
// const minusBtn = document.querySelectorAll(".minus-icon");

const Questions = document.querySelectorAll(".question-head");

function toggleFAQ(faqId) {
  const content = document.getElementById(faqId + "-content");
  const icon = document.getElementById(faqId + "-icon");

  // Toggle content visibility
  content.classList.toggle("hidden");
}

for (let i = 0; i < Questions.length; i++) {
  Questions[i].addEventListener("click", function () {
    const plusBtn = this.getElementsByClassName("plus-icon")[0];
    const minusBtn = this.getElementsByClassName("minus-icon")[0];

    if (plusBtn.style.display !== "none") {
      plusBtn.style.display = "none";
      minusBtn.style.display = "block";
    } else {
      plusBtn.style.display = "block";
      minusBtn.style.display = "none";
    }
  });
}
