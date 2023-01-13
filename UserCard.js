import './index.css'

const UserCard = props => {
  const {userDetails} = props
  const {name, email, phoneNumber, Edit, Delete} = userDetails

  return (
    <li className="users-list-container">
      <p className="name">{name}</p>
      <div className="users-list">
        <p className="email">{email}</p>
        <p className="phone-number">{phoneNumber}</p>
        <button type="button" className="edit-button">
          {Edit}
        </button>
        <button type="button" className="delete-button">
          {Delete}
        </button>
      </div>
    </li>
  )
}
export default UserCard
