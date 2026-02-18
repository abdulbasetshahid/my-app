import './App.css'
import { Vote } from './Vote'

import Users from './Users'
import { Suspense } from 'react';
import Friends from './Friends';

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json());

const fetchFriendsFunc = async() => {
  const friendsPromise = await fetch('https://jsonplaceholder.typicode.com/users');
  return friendsPromise.json();
};

function App() {

  const fetchFriends = fetchFriendsFunc();

  return (
    <div className='App'>
      <Department department="Computer Science" />
      <Person name="John Doe" university="University of Example" />
      <Person name="Jane Smith" university="Another University" />
      <Fees amount={5000} currencty="BDT" />
      <Fees amount={350} currencty="USD" />

      <Suspense fallback={<p>Loading.....</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h4>Bondhu asiteche...</h4>}>
        <Friends  friendPromise={fetchFriends}/>
      </Suspense>
    </div>
  )
}

function Person(props) {
  return (
    <div className='person'>
      <p><b>Name:</b> {props.name}</p>
      <p><b>University:</b> {props.university}</p>

      <Vote name="Like"></Vote>
      <Vote name="Dislike"></Vote>
    </div>
  )
}

function Department(props) {
  return (
    <div style={{ marginBottom: '2rem', color: 'cyan'}}>
      <p><b>Department:</b> {props.department}</p>
    </div>
  )
}

function Fees({amount = 0, currencty = 'USD'}) {
  return (
    <div style={{ textAlign: 'right', color: 'green'}}>
      <p><b>Amount:</b> {amount} {currencty}</p>
    </div>
  )
}

export default App
