import React, { useState, useEffect } from 'react';


function App() {

  // Define a counter state

  const [userList, setUserList] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.org/users')
      .then(response => response.json())
      .then((data) => { setUserList(data); console.log(JSON.stringify(data)) })
      .catch((error) => { console.log(error) });
  }, []);




  const styles = {
    userCard: { backgroundColor: "yellow", color: "red", margin: 20, padding:10 },

  }

  const renderUserCard = (userInfo) => {
    return (
      <div style={styles.userCard}>
        <div>{userInfo.firstname}</div>
        <div>{userInfo.lastname}</div>
        <div>{userInfo.email}</div>
        <div>{userInfo.birthDate}</div>
      </div>
    )
  }

  return (
    <div>
      <h1 style={styles.myTitle}>Myntra</h1>
      {
        userList.map(user => {
          return renderUserCard(user)
        })
      }

    </div>
  );
}

export default App;

const testData = [{id: 1, name: 'abhay', age: 25}, {id: 2, name: 'nivya', age: 23}]