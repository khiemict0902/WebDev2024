import React, { useState } from 'react';
import './Write.css';


function Write() {
    const [title, setTitle] = useState('');
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            title,
            topic,
            content,
            image,
        });
    };

    return (
        <>
        <div className="write-container">
            <div className="write-container_content">
                <h1 class="Write-New-Blog">Write a New Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter your blog title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="topic">topic</label>
                        <textarea 
                            className='form_text'
                            id="topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            rows='1'          
                            placeholder='Topic'   
                            required           
                        >
                        </textarea >
                    </div>

                    <div className="form-group">
                        <label htmlFor="image">Upload Image</label>
                        <input type="file" id="image" onChange={handleImageUpload} />
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Blog Preview"
                                className="image-preview"
                            />
                        )}
                    </div>

                
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <textarea 
                            className='form_text'
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows="10"
                            placeholder="Write your blog content here..."
                            required
                        />
                    </div>

            
                    <button type="submit" className="publish-button">Publish Blog</button>
                </form>
            </div>
        </div>
        </>
    )
}   

export default Write;
