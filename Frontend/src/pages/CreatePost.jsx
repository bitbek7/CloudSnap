import React from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await axios.post(
        "http://localhost:9898/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(res.data);
      e.target.reset();   // reset form
      navigate("/feed", {replace: true});   // ⭐ important

    } catch(error) {
      console.log(error);
      alert("Error creating post");
    }
  }

  return (
    <section className='page-container create-post-section'>
      <h1 className='page-title'>Upload  a Masterpiece</h1>

      <form onSubmit={handleSubmit} className="masterpiece-form">
        
        <div className="file-upload-wrapper">
          <label htmlFor="image-upload" className="file-upload-label">
            <div className="upload-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="upload-icon">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
            </div>
            <span className="upload-text">Choose an Image</span>
            <span className="upload-subtext">JPEG, PNG, GIF up to 10MB</span>
          </label>
          <input 
            id="image-upload"
            type="file"
            name="image"
            accept="image/*"
            required
            className="hidden-file-input"
          />
        </div>
        
        <div className="input-group floating-label-group">
          <input 
            type="text"
            id="caption"
            name="caption"
            placeholder=" "
            required
            autoComplete="off"
            className="floating-input"
          />
          <label htmlFor="caption" className="floating-label">Give it a brilliant title...</label>
          <div className="input-glow"></div>
        </div>

        <button type="submit" className="submit-btn-glow">
          <span className="btn-text">Publish Post ✨</span>
        </button>
      </form>
    </section>
  )
}

export default CreatePost;