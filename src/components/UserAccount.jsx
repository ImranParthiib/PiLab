import PropTypes from 'prop-types';
import { auth } from '../Firebase/firebaseConfig'; 

const UserAccount = ({ user }) => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <img src={user.photoURL} alt={user.displayName} />
      <p>{user.displayName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

UserAccount.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserAccount; 