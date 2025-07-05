import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function BottomNav(params) {
const location = useLocation

const navStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60px',
    backgroundColor: '#f2f2f2',
    borderTop: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '14px',
    zIndex: 1000
};

const linkStyle = (path) => ({
    textDecoration: 'none',
    color: location.pathname === path ? 'blue' : 'black',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
});

 return (
    <div style={navStyle}>
      <Link to="/" style={linkStyle('/')}>
        🏠 בית
      </Link>
      <Link to="/add" style={linkStyle('/add')}>
        ➕ תזכורת
      </Link>
      <Link to="/settings" style={linkStyle('/settings')}>
        ⚙️ הגדרות
      </Link>
    </div>
  );
}

export default BottomNav;