import React from 'react';
import StudentsList from './components/StudentList/index';
import StudentFormFind from './components/StudentFormFind';
import ItemList from './components/ItemList';
import Item from './components/Item';
import ItemFormFind from './components/ItemFormFind';
import SubjectFormFind from './components/SubjectFormFind';

function App() {
  return (
    <div className="app" style={styles.appContainer}>
      <h1 style={styles.appTitle}>My App</h1>

      <div className="card" style={styles.card}>
        <h2 style={styles.cardTitle}>Subject</h2>
        <SubjectFormFind />
      </div>

      <div className="card" style={styles.card}>
        <h2 style={styles.cardTitle}>Students</h2>
        <StudentFormFind />
      </div>

      <div className="card" style={styles.card}>
        <h2 style={styles.cardTitle}>Item</h2>
        <ItemFormFind />
      </div>

      <h2 style={styles.extraTitle}>Extra Section</h2>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
  },
  appTitle: {
    color: '#333',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  card: {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  cardTitle: {
    color: '#333',
    marginBottom: '10px',
  },
  extraTitle: {
    color: '#333',
    marginTop: '40px',
  },
};

export default App;
