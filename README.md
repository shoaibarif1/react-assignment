# react-assignment

Here’s a detailed README file you can use for your project on GitHub:

**Shift Booking Application**
This project is a Shift Booking Application built with React. It allows users to view, book, and cancel shifts. The project uses mock data to simulate the API for managing shifts.

**Features**

**My Shifts:**
View all booked shift.
Grouped by dates.
Shifts can be canceled.

**Available Shifts:** 
View available shifts, filtered by city (Helsinki, Tampere, Turku).
Shifts can be booked or canceled.
Prevents booking overlapping shifts.

**My Shifts**

Shows all the booked shifts, grouped by today's, tomorrow's, and future shifts. Users can cancel shifts unless they’ve already started or completed.

**Available Shifts.**

Displays shifts filtered by city. Users can book or cancel shifts, and overlapping bookings are prevented.

**How the App Works**

**State Management:** The app uses React's Context API to manage global state.

**Mock API:** Instead of calling a backend API, the app loads data from a mock file mockShifts.js.

**Booking Shifts:** When a shift is booked, it is added to the bookedShifts array and marked as booked in availableShifts.

**Canceling Shifts:** Shifts can be canceled if they have not started. Once canceled, the shift is removed from bookedShifts.

**How to Run the Project**

**Clone the repository:**

**Install dependencies:**

npm install

**Start the development server:**
npm start

**Visit http://localhost:3000 to view the app in your browser.**

**Dependencies**

React

React Router DOM

Luxon (for date and time handling)
