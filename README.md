This project is designed to help users track maintenance to their vehicles. 

Setup

Clone the project repository: 
git clone YOUR_GITHUB_REPOSITORY_URL

Navigate into the project directory:
cd car-maintenance-system

Open the project in your preferred code editor.

Open index.html in a browser.Alternatively, use the Visual Studio Code Live Server extension to run the application locally.

Usage:
This local version can be used and track your vehicles and maintenance associated with them. It can also be used to track the
expenses along with them

To begin select the add vehicle button, input the asked info, and hit "Add vehicle". You can repeat this for multiple vehicles
<img width="699" height="194" alt="image" src="https://github.com/user-attachments/assets/2445086b-98d6-4e7f-a600-791ab1a01119" />

The vehicle should now be displayed. It can be edited by hitting the edit button and filling out the form. You can also delete
the vehicle by hitting the delete button(This does not delete the maintenance records associated with the vehicle)
<img width="350" height="162" alt="image" src="https://github.com/user-attachments/assets/315ed082-a805-4aa6-81d5-9a773c15e8b0" />

You can create maintenance records associated with any of the vehicles that are being displayed by filling out the mileage, date, and description.
<img width="700" height="282" alt="image" src="https://github.com/user-attachments/assets/2c738086-4b85-4b35-b5fd-1be4a977c753" />

You can see a deployed version here: https://cmt-masonb.onrender.com

Structure

This uses basic HTML and CSS to display content and JavaScript to handle the logic. The MVC models is used to separate the cost calculation
and its display in the dashboard. The cost is handled by a function which then passes it to a different one to handle updating the HTML element.

Potential Issues
Vehicle Does Not Appear

  Possible causes:

  Required vehicle information is missing.

  The form validation failed.

  The vehicle display function did not execute.

  Solutions:

  Fill in all required fields.

  Check the validation messages.

  Inspect displayVehicles() and the vehicle array.

Maintenance Record Cannot Be Created

  Possible causes:

  No vehicle has been registered.

  The maintenance date is invalid or in the future.

  Mileage exceeds the vehicle's current mileage.

  The maintenance cost is negative or missing.

  Solutions:

  Add a vehicle before creating a maintenance record.

  Confirm the date is valid.

  Verify the mileage and cost values.


Limitations:

The current version of this product doesn't allow for creation account. It also doesn't have persistent data due to a
current lack of a database. Scheduled, overdue, and recommended maintenance are also not implemented yet. All processing is 
currently done on the client side.

These are planned to be addressed with the addition of a database and the use of Node.js to do function on the server side. These
will also make the data persistent and allow the facilitation of accounts.
