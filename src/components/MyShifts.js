import React, { useContext } from 'react';
import { DateTime } from 'luxon';
import { ShiftsContext } from '../context/ShiftsContext';

const MyShifts = () => {
  const { bookedShifts, cancelShift } = useContext(ShiftsContext);

  const today = DateTime.local().startOf('day').toMillis();
  const tomorrow = DateTime.local().plus({ days: 1 }).startOf('day').toMillis();

  const handleCancel = (shiftId, startTime) => {
    if (DateTime.local().toMillis() >= startTime) return;
    cancelShift(shiftId);
  };

  const groupedShifts = {
    today: bookedShifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() === today),
    tomorrow: bookedShifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() === tomorrow),
    future: bookedShifts.filter(shift => DateTime.fromMillis(shift.startTime).startOf('day').toMillis() > tomorrow),
  };

  const renderShifts = (shifts, label) => (
    <div className="shift-group mb-6">
      <h3 className="text-xl font-semibold mb-3">{label}</h3>
      {shifts.length === 0 ? (
        <p className="text-gray-500">No shifts for {label.toLowerCase()}.</p>
      ) : (
        shifts.map((shift) => (
          <div key={shift.id} className="shift-card border p-4 mb-3 flex justify-between items-center shadow-md rounded-lg">
            <div className="shift-info">
              <span className="text-lg">
                {`${DateTime.fromMillis(shift.startTime).toFormat('hh:mm a')} - ${DateTime.fromMillis(shift.endTime).toFormat('hh:mm a')}`}
              </span>
              <span className="text-gray-500 ml-2">{` | ${shift.area}`}</span>
              <span className="text-green-500 font-semibold ml-2">Booked</span>
            </div>
            <button
              onClick={() => handleCancel(shift.id, shift.startTime)}
              disabled={DateTime.local().toMillis() >= DateTime.fromMillis(shift.endTime).toMillis()}
              className={`cancel-button ${
                DateTime.local().toMillis() >= DateTime.fromMillis(shift.endTime).toMillis()
                  ? 'bg-gray-300 p-2 rounded cursor-not-allowed'
                  : 'border rounded-full border-red-500 text-red-500 bg-white px-3 py-1'
              }`}
            >
              Cancel
            </button>
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="my-shifts-container p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">My Shifts</h2>
      {renderShifts(groupedShifts.today, "Today's Shifts")}
      {renderShifts(groupedShifts.tomorrow, "Tomorrow's Shifts")}
      {renderShifts(groupedShifts.future, 'Upcoming Shifts')}
    </div>
  );
};

export default MyShifts;
