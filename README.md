# Shift Booking Application

This project is a Shift Booking Application built with React. It allows users to view, book, and cancel shifts. The project uses mock data to simulate the API for managing shifts.

## Features

## My Shifts:

* View all booked shifts, grouped by dates.
  
* Shifts can be canceled.

## Available Shifts:
* View available shifts
* filtered by city (Helsinki, Tampere, Turku).
* Shifts can be booked or canceled.
* Prevents booking overlapping shifts.



### My Shifts
Shows all the booked shifts, grouped by today's, tomorrow's, and future shifts. Users can cancel shifts unless they’ve already started or completed.
![Screenshot 2024-10-10 163831](https://github.com/user-attachments/assets/f5c7dca3-58bd-4df5-a19f-dcaadbffd43d)



### Available Shifts
Displays shifts filtered by city. Users can book or cancel shifts, and overlapping bookings are prevented.
![Screenshot 2024-10-10 163848](https://github.com/user-attachments/assets/524e6fbf-4eb2-42ab-b15d-bb5a84f0f1c2)
![Screenshot 2024-10-10 163903](https://github.com/user-attachments/assets/e0f4767e-06fd-4bfc-8540-2737423d3eff)
![Screenshot 2024-10-10 163922](https://github.com/user-attachments/assets/43c91367-0e69-43cf-a780-e390a3b983bd)



### How the App Works

* State Management: The app uses React's Context API to manage global state.
* Mock API: Instead of calling a backend API, the app loads data from a mock file mockShifts.js.
* Booking Shifts: When a shift is booked, it is added to the bookedShifts array and marked as booked in availableShifts.
* Canceling Shifts: Shifts can be canceled if they have not started. Once canceled, the shift is removed from bookedShifts.
  
### How to Run the Project

* Clone the repository:
  
 * git clone https://github.com/shoaibarif1/react-assignment.git


### Install dependencies:

##### npm install

### Start the development server:

##### npm start

### Dependencies
* React
* React Router DOM
* Luxon (for date and time handling)
