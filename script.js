const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const plan = btn.dataset.plan;
    const price = btn.dataset.price;

    // Remove active state
    document.querySelectorAll(".price-card").forEach(card => {
      card.classList.remove("selected");
    });

    // Add active state
    btn.closest(".price-card").classList.add("selected");

    // Simulate cart
    window.location.href = "https://cellucarehq.com/d/order-now.php#aff=vikasbabu9524936f4c"

    console.log({
      product: "Cellucare",
      plan: plan,
      price: price
    });
  });
});


const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("span");

    // Close others
    document.querySelectorAll(".faq-answer").forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
        item.previousElementSibling.querySelector("span").textContent = "+";
      }
    });

    // Toggle current
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.textContent = "+";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.textContent = "−";
    }
  });
});


let totalSeconds = 19 * 60 + 49; // 19 min 49 sec

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateTimer() {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;

  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");

  if (totalSeconds > 0) {
    totalSeconds--;
  }
}

setInterval(updateTimer, 1000);
updateTimer();
