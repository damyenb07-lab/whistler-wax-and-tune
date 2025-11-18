// ===============================
//  BLOCK UNAVAILABLE BOOKING DAYS
// ===============================

// Disable Wednesday (3), Thursday (4), Friday (5)
const dateInput = document.getElementById("date");

dateInput.addEventListener("input", () => {
  const chosenDate = new Date(dateInput.value);
  const day = chosenDate.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, etc.

  if (day === 3 || day === 4 || day === 5) {
    dateInput.setCustomValidity("Sorry, bookings are not available on Wednesdays, Thursdays, or Fridays.");
    dateInput.reportValidity();
  } else {
    dateInput.setCustomValidity("");
  }
});


// ===============================
//  FORM SUBMISSION HANDLING
// ===============================

const form = document.getElementById("bookingForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // stop refresh

  message.textContent = "Submitting...";
  message.style.color = "#66aaff";

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      message.textContent = "Thanks! Your booking has been sent. You'll get a confirmation soon.";
      message.style.color = "#4caf50";
      form.reset();
    } else {
      message.textContent = "Something went wrong. Please try again or message us on Instagram.";
      message.style.color = "#ff6b6b";
    }
  } catch (error) {
    message.textContent = "Network error. Please check your connection.";
    message.style.color = "#ff6b6b";
  }
});
