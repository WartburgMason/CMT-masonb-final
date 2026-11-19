let vehicles =[];
// Get HTML elements
document.addEventListener("DOMContentLoaded", function () {
    const vehicleForm = document.getElementById("vehicleForm");
    const vehicleFormContainer = document.getElementById("vehicleFormContainer");
    const vehicleList = document.getElementById("vehicleList");
    const emptyVehicles = document.getElementById("emptyVehicles");
    const showVehicleForm = document.getElementById("showVehicleForm");
    const cancelVehicleForm = document.getElementById("cancelVehicleForm");
    document.getElementById("totalVehicles").textContent = vehicles.length;
}); 

// Show the vehicle form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showVehicleForm").addEventListener("click", function () {
        vehicleFormContainer.style.display = "block";
    });
});

// Hide the vehicle form
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cancelVehicleForm").addEventListener("click", function () {
        vehicleFormContainer.style.display = "none";
        vehicleForm.reset();
    });
});

// Add a new vehicle
document.addEventListener("DOMContentLoaded", function () {
vehicleForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values from the form
    const make = document.getElementById("vehicleMake").value.trim();
    const model = document.getElementById("vehicleModel").value.trim();
    const year = Number(document.getElementById("vehicleYear").value);
    const mileage = Number(document.getElementById("vehicleMileage").value);

    // Basic validation
    const currentYear = new Date().getFullYear();

    if (!make || !model || !Number.isInteger(year) ||
        year < 1886 || year > currentYear + 1 ||
        !Number.isInteger(mileage) || mileage < 0) {
        alert("Please enter valid vehicle information.");
        return;
    }

    // Create vehicle object
    const vehicle = {
        id: Date.now(),
        make: make,
        model: model,
        year: year,
        mileage: mileage
    };

    // Add vehicle to array
    vehicles.push(vehicle);
    document.getElementById("totalVehicles").textContent = vehicles.length;

    // Update vehicle display
    displayVehicles();

    // Reset and hide form
    vehicleForm.reset();
    vehicleFormContainer.style.display = "none";
});
});
// Display all vehicles
function displayVehicles() {

    // Clear existing cards
    vehicleList.replaceChildren();

    // Display empty message if no vehicles exist
    emptyVehicles.style.display =
        vehicles.length === 0 ? "block" : "none";

    // Create a card for each vehicle
    vehicles.forEach(function (vehicle) {

        const card = document.createElement("div");
        card.className = "vehicle-card";

        const image = document.createElement("div");
        image.className = "vehicle-image";
        image.textContent = "🚘";

        const details = document.createElement("div");
        details.className = "vehicle-details";

        const status = document.createElement("span");
        status.className = "vehicle-status";
        status.textContent = "Active";

        const title = document.createElement("h3");
        title.textContent = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;

        const vehicleID = document.createElement("p");
        vehicleID.textContent = `Vehicle ID: VH-${vehicle.id}`;

        const info = document.createElement("div");
        info.className = "vehicle-info";

        const mileageInfo = document.createElement("div");

        const mileageLabel = document.createElement("small");
        mileageLabel.textContent = "Mileage";

        const mileageValue = document.createElement("strong");
        mileageValue.textContent =
            `${vehicle.mileage.toLocaleString()} mi`;

        mileageInfo.append(mileageLabel, mileageValue);
        info.appendChild(mileageInfo);

        const actions = document.createElement("div");
        actions.className = "vehicle-card-actions";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-vehicle";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            deleteVehicle(vehicle.id);
        });

        actions.appendChild(deleteButton);

        details.append(
            status,
            title,
            vehicleID,
            info,
            actions
        );

        card.append(image, details);

        vehicleList.appendChild(card);
    });
};


// Delete a vehicle
function deleteVehicle(vehicleID) {

    vehicles = vehicles.filter(function (vehicle) {
        return vehicle.id !== vehicleID;
    });
    document.getElementById("totalVehicles").textContent = vehicles.length;
    displayVehicles();
}

document.addEventListener("DOMContentLoaded", function () {
    displayVehicles();
});
