import { useEffect } from 'react';

const ProfilePage = () => {

    const LogOut = (e) => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
    }


    return(
        <div>
            <h2>This the profile page</h2>
            <button onClick={() => LogOut()}>Logout</button>
        </div>
    );
}

export default ProfilePage;