import './Calendar.css';
import { useState } from 'react';

export default function Calendar({ onDateSelect, selectedDates = {} }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = [];

  // Empty cells for days before the month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const toggleDate = (day) => {
    if (!day) return;
    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
    onDateSelect(dateKey, !selectedDates[dateKey]);
  };

  const monthName = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' });
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-nav-btn" onClick={handlePrevMonth}>←</button>
        <h3 className="calendar-month">{monthName.toUpperCase()}</h3>
        <button className="calendar-nav-btn" onClick={handleNextMonth}>→</button>
      </div>

      <div className="calendar-weekdays">
        {weekDays.map((day) => (
          <div key={day} className="calendar-weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day, index) => {
          const dateKey = day ? `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}` : null;
          const isSelected = day && selectedDates[dateKey];

          return (
            <button
              key={index}
              className={`calendar-day ${!day ? 'empty' : ''} ${isSelected ? 'available' : ''}`}
              onClick={() => toggleDate(day)}
              disabled={!day}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="calendar-legend">
        <div className="legend-item">
          <span className="legend-color available"></span>
          <span className="legend-text">Disponível</span>
        </div>
        <div className="legend-item">
          <span className="legend-color unavailable"></span>
          <span className="legend-text">Indisponível</span>
        </div>
      </div>
    </div>
  );
}
