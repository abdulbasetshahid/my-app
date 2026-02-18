import './App.css';

export default function Friend({friend}) {
    const {name, email} = friend;
    return (
        <div className="card">
            <h3>Name:  {name}</h3>
            <h6>Email: {email}</h6>
        </div>
    )
}