import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useLocation} from "react-router-dom";

const Feed = () => {
    const location = useLocation();
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4",
            caption: "Explore The Universe"
        }
    ]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/fetch/data`)
            .then((res) => {
                setPosts(res.data.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [location.state])

  return (
    <section className="page-container feed-section">
      <h1 className="page-title">Discover Inspiration</h1>
      
      <div className="feed-grid">
        {
            Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <div className="image-container">
                            <img src={post.image} alt={post.caption} />
                            <div className="img-overlay"></div>
                            <div className="post-content">
                                <p>{post.caption}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="empty-state">
                    <h3>No masterpieces yet</h3>
                    <p>Be the first to create one!</p>
                </div>
            )
        }
      </div>
    </section>
  )
}

export default Feed;