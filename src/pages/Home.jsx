import { useState } from "react";
import Form from "../components/Form";
import ProfileCard from "../components/ProfileCard";
import { fetchGravatarProfile } from "../utils/gravatar";

const Home = () => {
  const [profile, setProfile] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const gravatarData = await fetchGravatarProfile(formData.email);

      const combinedProfile = {
        displayName: formData.displayName || gravatarData.displayName,
        fullName: formData.fullName || gravatarData.fullName,
        email: formData.email || gravatarData.email,
        username: formData.username || gravatarData.username,
        phone: formData.phone || gravatarData.phone,
        location: formData.location || gravatarData.currentLocation,
        website: formData.website || gravatarData.website,
        bio: formData.bio || gravatarData.aboutMe,
        photo: `https://www.gravatar.com/avatar/${gravatarData.hash}?s=200&d=mp`,
      };

      setProfile(combinedProfile);
    } catch (error) {
      console.error("Error fetching Gravatar profile:", error);

      setProfile(formData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Enhanced Gravatar-Based User Profile Card
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
        <div>
          <Form onSubmit={handleSubmit} />
        </div>
        {profile && (
          <div>
            <ProfileCard profile={profile} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
