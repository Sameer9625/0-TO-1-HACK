document.getElementById("pickupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const wasteType = document.getElementById("wasteType").value;
    const pickupDate = document.getElementById("pickupDate").value;

    if (location && wasteType && pickupDate) {
        alert(`Pickup request submitted!\nLocation: ${location}\nWaste Type: ${wasteType}\nDate: ${pickupDate}`);
        document.getElementById("pickupForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Handle navigation button clicks
document.querySelectorAll(".navigateBtn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Navigation started to the selected location.");
    });
});

// Handle login button click
document.getElementById("loginBtn").addEventListener("click", () => {
    alert("Login functionality coming soon!");
});
