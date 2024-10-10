import React, { useContext, useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import { ShiftsContext } from '../context/ShiftsContext';
import mySvg from '../assets/spinner_green.svg';

const AvailableShifts = () => {
  const { availableShifts, bookShift, cancelShift } = useContext(ShiftsContext);
  const [selectedCity, setSelectedCity] = useState('Helsinki');
  const [shifts, setShifts] = useState([]);
  const [animationButtonId, setAnimationButtonId] = useState(null);

  const today = DateTime.local().startOf('day').toMillis();
  const tomorrow = DateTime.local().plus({ days: 1 }).startOf('day').toMillis();

  useEffect(() => {
    const filteredShifts = availableShifts.filter(
      (shift) => shift.area.toLowerCase() === selectedCity.toLowerCase()
    );
    setShifts(filteredShifts);
  }, [selectedCity, availableShifts]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
    setAnimationButtonId(null);
  };

  const groupedShifts = {
    today: shifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() === today),
    tomorrow: shifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() === tomorrow),
    future: shifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() > tomorrow),
  };

  const handleBookButtonClick = (shiftId) => {
    setAnimationButtonId(shiftId);
    bookShift(shiftId);

    setTimeout(() => {
      setAnimationButtonId(null);
    }, 1000);
  };

  const renderShifts = (shifts, label) => (
    <div className="shift-group mb-6">
      <h3 className="text-xl font-semibold mb-3">{label}</h3>
      {shifts.length === 0 ? (
        <p className="text-gray-500">No shifts available for {label.toLowerCase()}.</p>
      ) : (
        shifts.map((shift) => (
          <div key={shift.id} className="shift-card border p-4 mb-3 flex justify-between items-center shadow-md rounded-lg">
            <div className="shift-info">
              <span className="text-lg">
                {`${DateTime.fromMillis(shift.startTime).toFormat('hh:mm a')} - ${DateTime.fromMillis(shift.endTime).toFormat('hh:mm a')}`}
              </span>
              <span className="text-gray-500 ml-2">{` | ${shift.area}`}</span>
            </div>
            <div className="flex items-center space-x-2">
              {shift.booked ? (
                <>
                  <span className="text-green-500">Booked</span>
                  <button
                    onClick={() => cancelShift(shift.id)}
                    className="cancel-button border rounded-full border-red-500 text-red-500 bg-white px-2 py-1"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <div className="book-button-container">
                  <button
                    onClick={() => handleBookButtonClick(shift.id)}
                    disabled={shift.booked}
                    className={`book-button border rounded-full border-green-500 text-green-500 bg-white px-2 py-1 ${
                      animationButtonId === shift.id ? 'animation-button' : ''
                    }`}
                  >
                    Book
                    {animationButtonId === shift.id && (
                      <img src={mySvg} alt="Loading animation" className="animation-icon ml-2" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="available-shifts-container p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Available Shifts</h2>

      <div className="city-filter flex justify-around mb-6">
        <button
          onClick={() => handleCityChange('Helsinki')}
          className={`city-button ${selectedCity === 'Helsinki' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded-full px-4 py-2`}
        >
          Helsinki
        </button>
        <button
          onClick={() => handleCityChange('Tampere')}
          className={`city-button ${selectedCity === 'Tampere' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded-full px-4 py-2`}
        >
          Tampere
        </button>
        <button
          onClick={() => handleCityChange('Turku')}
          className={`city-button ${selectedCity === 'Turku' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} border border-blue-500 rounded-full px-4 py-2`}
        >
          Turku
        </button>
      </div>

      {renderShifts(groupedShifts.today, "Today's Shifts")}
      {renderShifts(groupedShifts.tomorrow, "Tomorrow's Shifts")}
      {renderShifts(groupedShifts.future, 'Upcoming Shifts')}
    </div>
  );
};

export default AvailableShifts;
