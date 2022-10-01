import React, { useContext } from 'react';
import { useEffect,useState } from 'react';
import { useLocation , Link} from 'react-router-dom';
import './singlePost.css'
import axios from 'axios';
import { Context } from '../../context/Context';

export default function SinglePost() {

  const location = useLocation();
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({})
  const pb = 'http://localhost:5000/images/';
  const { user } = useContext(Context);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path);
      setPost(res.data)
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, { data: { username: user.username } });
      window.location.replace('/');
    } catch (error) {
      
    }
}

  const handleUpdate = async()=>{
      try {
        await axios.put(`/posts/${post._id}`, {
            username: user.username,
            title,
            desc
        });
        setUpdateMode(false);
    } catch (error) {
      
    }
  }
  
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={pb + post.photo} alt=""
          className='singlePostImg'
          />
        )}
        {
          updateMode ? <input type='text' value={title} className='singlePostTitleInput' autoFocus onChange={(e)=>setTitle(e.target.value)} /> : (
            <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className=" singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
              <i class="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
            </div>
          )}
          </h1>
          )
        }
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
            Author:
            <Link className='link' to={`/?user=${post.username}`}><b>{post.username}</b></Link>
            </span>
            <span className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        {updateMode ? <textarea  value={desc}  
        className='singlePostDescriptionInput' onChange={(e)=>setDesc(e.target.value)}/> : (
           <p className='singlePostDescription'>{desc}
        </p>
        )}
        {updateMode &&
         <button className='singlePostButton' onClick={handleUpdate}>Update</button> 
      }   
      </div>
    </div>
  )
}
