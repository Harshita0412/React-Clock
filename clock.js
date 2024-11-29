import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: '#61dafb',
    fontFamily: 'Arial, sans-serif',
  },
  clock: {
    fontSize: '5rem',
  },
};

export default Clock;
