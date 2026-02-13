import { use } from 'react';
import './App.css'

export default function Friends({fetchFriends}) {

    const friends = use(fetchFriends);
    return (
        <div className="card">
            <h3>Friends: {friends.length}</h3>
        </div>
    );
}