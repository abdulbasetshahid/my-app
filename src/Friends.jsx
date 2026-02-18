import { use } from 'react';
import Friend from './Friend';
import './App.css'

export default function Friends({friendPromise}) {

    const friends = use(friendPromise);
    return (
        <div className="card-holder">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend  friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
}