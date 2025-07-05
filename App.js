import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SupplementReminderForm from './components/SupplementReminderForm';
import BottomNav from './components/BottomNav';

function Home() {
  return <h2 style={{textAlign: 'center', marginTop: '2rem'}}>ברוך הבא לאפליקציה!</h2>
}

function Settings() {
  return <h2 style={{ textAlign: 'center', marginTop: '2rem'}}>הגדרות</h2>
}

function App() {
  // משתנים לשמירת הקלט מהמשתמש
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  // כשמשתמש לוחץ על כפתור "הבא"
  const handleSubmit = (e) => {
    e.preventDefault(); // כדי שלא ירענן את הדף
    console.log('שם:', name);
    console.log('משקל:', weight);
    console.log('גובה:', height);
    alert(`שלום ${name}! נשמרו הפרטים שלך.`);
    // כאן נוכל בהמשך לשמור ב-localStorage או לשלוח לשרת
  };

  return (
    <><Router>
      <div style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element {...<SupplementReminderForm />} />
        </Routes>
      </div>
      <BottomNav />
    </Router><div class="" style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
        <h2>הזנת פרטים</h2>
        <form onSubmit={handleSubmit}>
          <label>
            שם:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </label>
          <br /><br />

          <label>
            משקל (בק"ג):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required />
          </label>
          <br /><br />

          <label>
            גובה (בס"מ):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required />
          </label>
          <br /><br />

          <button type="submit">הבא</button>
        </form>
        <SupplementReminderForm />
      </div></>
  );
}

export default App;
