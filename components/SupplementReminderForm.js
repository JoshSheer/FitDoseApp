import React, { useState } from 'react';

function SupplementReminderForm() {
  const [supplement, setSupplement] = useState('');
  const [brand, setBrand] = useState('');
  const [time, setTime] = useState('');

  const [reminders, setReminders] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`נשמרה תזכורת ל-${supplement} (${brand}) בשעה ${time}`);
    
    const newReminder = {
      supplement,
      brand,
      time
    };

    // מוסיף את התזכורת למערך
    setReminders([...reminders, newReminder]);

    setSupplement('');
    setBrand('');
    setTime('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>הוספת תזכורת</h2>
      <form onSubmit={handleSubmit}>
                <label>
          שם חברה:
          <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          required
          >
            <option value="">בחר חברה</option>
            <option value="myProtein">myProtein</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          סוג תוסף:
          <select
            value={supplement}
            onChange={(e) => setSupplement(e.target.value)}
            required
          >
            <option value="">בחר תוסף</option>
            <option value="קריאטין">קריאטין</option>
            <option value="חלבון">חלבון</option>
            <option value="BCAA">BCAA</option>
            <option value="אחר">אחר</option>
          </select>
        </label>
        <br /><br />

        <label>
          שעה:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <button type="submit">שמור</button>
      </form>
      <h3>📋 התזכורות שלך:</h3>
      {reminders.length === 0 ? (
        <p>אין תזכורות עדיין.</p>
      ) : (
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              🕒 {reminder.time} – 💊 {reminder.supplement} ({reminder.brand})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SupplementReminderForm;
