import React, { useState } from 'react';
import './EditProfile.css';

function EditProfile() {
  const ProfileForm = () => {
    const [profile, setProfile] = useState({
      userName: '',
      dateOfBirth: '',
      bio: '',
      introduction: ''
    });

    const [image, setImage] = useState(null); // State for storing the uploaded image

    const handleChange = (e) => {
      const { name, value } = e.target;
      setProfile({
        ...profile,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Profile submitted:', profile);
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result); // Update the image state with the file data
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      }
    };

    // const handleImageRemove = () => {
    //   setImage(null); // Remove the image preview
    // };

    return (
      <>
        <div className="profile_form_container">
          <form onSubmit={handleSubmit} className="profile_form">
          <div className='heading_form'><h1>Profile Information</h1></div>
            <div className='uploadte_profile_container'>
                <div className="profile_image">
                    <input
                        type="file"
                        accept="image/*"
                        id="fileInput"
                        onChange={handleImageChange}
                        className="upload_input"
                    />
                <label htmlFor="fileInput" className="custom_upload_button">
                        Upload Image
                </label>
                </div>

                <div className='photo_form'>
                    <div className='heading_photo_form'><h2>Photo</h2></div>    
                    <div><p>Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per side.</p></div>

                </div>
            </div>
            
            <div className="form_group">
              <label>User Name</label>
              <input
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
                placeholder="User Name"
              />
            </div>

            <div className="form_group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <div className="form_group">
              <label>Short Bio</label>
              <input
                type="text"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                placeholder="Short bio"
              />
            </div>

            <div className="form_group">
              <label>Introduce Yourself</label>
              <textarea
                name="introduction"
                value={profile.introduction}
                onChange={handleChange}
                placeholder="Introduce yourself"
              />
            </div>

            <button type="submit" className="submit-button">Finish</button>
          </form>
        </div>
      </>
    );
  };

  return <ProfileForm />;
}

export default EditProfile;
