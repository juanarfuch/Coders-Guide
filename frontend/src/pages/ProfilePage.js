import React from 'react';
import { getProfile, updateProfile } from '../api/user';
import ProfileForm from '../components/ProfileForm';


const ProfilePage = ()=>{
        const [profile, setProfile] = useState(null);
      
        useEffect(() => {
          const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await getProfile(token);
            setProfile(response.profile);
          };
      
          fetchProfile();
        }, []);
        const handleUpdateProfile = async (formData) => {
            const token = localStorage.getItem('token');
            const response = await updateProfile(token, formData);
            setProfile(response.profile);
          };
          if (!profile) {
            return <div>Loading...</div>;
          }
    return (
        <div>
        <h2>Profile</h2>
        <ProfileForm profile={profile} onSubmit={handleUpdateProfile} />
        </div>
        );
};        


export default ProfilePage;
