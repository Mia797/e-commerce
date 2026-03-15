import { useAuth } from '../../context/AuthContext';
import './Profile.css'; 

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return <div className="profile-container"><h2 style={{color: 'white'}}>Please login to view your profile</h2></div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img src={user.image} alt={user.firstName} className="profile-avatar" />
          </div>
          <div className="profile-title">
            <h2>{user.firstName} {user.lastName}</h2>
            <p className="profile-username">@{user.username}</p>
            {user.role === 'admin' && <span className="admin-badge">Administrator</span>}
          </div>
        </div>

        <div className="profile-body">
          <div className="info-group">
            <h3>Contact</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>

          <div className="info-group">
            <h3>Personal</h3>
            <p><strong>Age:</strong> {user.age} yrs</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Born:</strong> {user.birthDate}</p>
          </div>

          <div className="info-group address">
            <h3>Location</h3>
            <p><strong>Street:</strong> {user.address?.address || 'N/A'}</p>
            <p><strong>City:</strong> {user.address?.city || 'N/A'}</p>
            <p><strong>State:</strong> {user.address?.state || 'N/A'} {user.address?.postalCode || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
