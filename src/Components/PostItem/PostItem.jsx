import React from 'react';
import styled from 'styled-components'

function PostItem(props) {
  return (
    <Card className='post'>
        <div className='post__content'>
            <strong>{props.number}.{props.post.title}</strong>
       
       <div> {props.post.body}</div>
       </div>
       <div className='post__btn'>
        <button>delete</button>
       </div>
    </Card>
  )
}

export default PostItem


const Card=styled.div`
 display: flex;
 justify-content:space-between;
 align-items:center;
padding:10px;
margin-top:15px;
border:2px solid teal;

 `

//  .post=styled.div`
//     display: flex;

//     justify-content:space-between;
//     padding: 15px;
//     border:1px solid red;
//  `
//  .post__content=styled.div`
//     display: flex;
//     justify-content:space-between;
//     padding: 10px;
//     margin:10px;
 
//     `