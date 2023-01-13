import UserCard from '../UserCard'
import './index.css'

const usersList = [
  {
    email: 'ravitejakuppala@gmail.com',
    name: 'Raviteja',
    phoneNumber: '9836541255',
  },
  {
    email: 'suresh@gmail.com',
    name: 'suresh',
    phoneNumber: '7836441255',
  },
  {
    email: 'sai@gmail.com',
    name: 'sai',
    phoneNumber: '8365541225',
  },
  {
    email: 'ravitejakuppala@gmail.com',
    name: 'mohan',
    phoneNumber: '983789255',
  },
]

const UsersList = () => (
  <div className="home-container">
    <ul>
      {usersList.map(user => (
        <UserCard key={user.key} />
      ))}
    </ul>
  </div>
)
export default UsersList
