import React,{useState} from "react";
import {BiUserCircle,BiCommentDetail} from 'react-icons/bi';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {IoIosShareAlt} from 'react-icons/io';


function App() {
  const [like,setLike] = useState(false);//false means no like
  const [count,setCount] = useState(0);
  //handlelikes
  const handleLikes = ()=>{
    if(!like){
      setLike(true)
      setCount(count+1)
    }
    else{
      setLike(false)
     
    }
  }
  
  const imgUrl = "https://images.unsplash.com/photo-1672705923141-82aeac495e1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  return (
    <>
    <div className="mainContainer">
      <h1 className="text-info">POST LIKE APP</h1>
      <h4>Like Count : {count}</h4>
      <div className="card" style={{width:"18rem"}}>
        <div className="card-header">
          <BiUserCircle size={30}/> UserName
        </div>
        <div className="card-body">
         <img src={imgUrl} alt="post-img" style={{width:'100%',height:'300px'}} onDoubleClick={handleLikes}/>
        </div>
        <div className="card-footer">
          {like? (<AiFillHeart size={30} className="text-danger" onClick={handleLikes} style={{cursor:'pointer'}}/> ):
          (<AiOutlineHeart size={30} onClick={handleLikes} style={{cursor:'pointer'}}/>) }
           Like
           &nbsp;
       <BiCommentDetail size={30}/> Comment
       &nbsp;
        <IoIosShareAlt size={30}/>Share
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
