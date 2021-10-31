import './App.css';
import styled from 'styled-components'
import videoplay from './comp/final.mp4'
import layer from './comp/vertical2.mp4'
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import React,{useState} from 'react'
import { EmailShareButton,EmailIcon} from 'react-share'

function App() {
  const [share,setShare]=useState(false)
  return (
    <Component>
      <VideoComponent>
      <Video1  autoPlay="autoPlay" playsinline autoplay muted loop >
          <source src={videoplay} type="video/mp4"/>
      </Video1>
      <IconContainer>
      <Video  autoPlay="autoPlay" playsinline autoplay muted loop  mobile={true}>
          <source src={layer} type="video/mp4"/>
      </Video>
      <IconDiv>
      <Linkto href="https://play.google.com/store/apps/dev?id=6259831402052261779">   
      <Icon src='icons/google.svg'/>
        </Linkto>
      <Button onClick={()=>setShare(!share)}>
       <Span>Share</Span>
      <Icon src='icons/share.svg' shares={true}/>
        </Button>
      </IconDiv>      
      { 
      share&& <ShareIcons>
      <FacebookShareButton
        url={"https://play.google.com/store/apps/dev?id=6259831402052261779"}
      >
        <FacebookIcon size={32} round /> 
      </FacebookShareButton>
      <TwitterShareButton
        title={"test"}
        url={"https://play.google.com/store/apps/dev?id=6259831402052261779"}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
      url={"https://play.google.com/store/apps/dev?id=6259831402052261779"}
      >
        <EmailIcon size={32} round/>
      </EmailShareButton>
      </ShareIcons>
      }
     
      </IconContainer>
      </VideoComponent>
    </Component>
  );
}

export default App;
const Component=styled.div`
height: 100vh;
width: 100%;
`
const Video=styled.video`
z-index:10;
left:70%;
height:260px;
top:259px;
left: 10%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
border: 2px solid gray;
border-radius:20px;
@media(max-width:768px){
  left:20%;
  height: 300px;
  top: 300px;
}
@media(max-height:568px){
  height: 200px;
}
@media(min-height:690px){
  height: 290px;
}
`
const Video1=styled.video`
width:80% ;
height: 100%;
object-fit: contain;
position: fixed;
top: 0;
@media(max-width:768px){
  width: 100vw;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
}
`
const VideoComponent=styled.div`
height: 100%;
width: 80%;
margin: auto;
`
const IconContainer=styled.div`
z-index:100;
position: fixed;
bottom:50px;
width: 40%;
left: 30%;
display: flex;
flex-direction: column;
align-items: center;
@media(max-height:587px){
  margin-bottom: -40px;
}
@media(max-width:768px){
  flex-direction: column;
  align-items:center;
  left: 30%;
  bottom: 10vh;
}
@media(max-width:458px){
  bottom: 3vh;
  left: 30%;
}
@media(max-width:325px) and (max-height:569px){
  bottom:30px;
  left: 26%;
}
`
const Icon=styled.img`
z-index:100;
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
width: ${props=>props.shares?'30px':'150px'};
margin-top: ${props=>props.shares&&'3px'};
@media(max-width:768px){
  width: ${props=>props.shares?'27px':'150px'};
  margin-right:${props=>props.shares&&'-30px'};
}
`
const Button=styled.button`
transition: transform .2s;
&:hover{transform: scale(1.1)}; 
outline: none;
border: none;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height:40px;
margin-top: -4px;
border-radius:5px;
display:inline-block;
cursor: pointer;
border: 1px solid gray;
background-color: black;
width: 129px;
@media(max-width:768px){
  height: 39px;
  width: 120px;
  margin-top: -1px;
}
`
const ShareIcons=styled.div`
margin-top:-20%;
flex-direction:column;
margin-left: 350px;
padding:10px;
justify-content: space-around;
display: flex;
@media(max-width:768px){
  flex-direction: column;
  margin-left: 310px;
  margin-top: -50%;
}
@media(max-width:458px){
  margin-top: -90%;
}
`
const IconDiv=styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 20px;
@media(max-width:768px){
  flex-direction:row;
}
`
const Linkto=styled.a`
`
const Span=styled.div`
color: white;
display: inline-block;
width: 80px;
top: -7px;
position: relative;
font-size: 20px;
font-weight: bold;
font-family: 'Courier New', Courier, monospace;
@media(max-width:768px){
  font-size: 18px;
  width: 50px;
  left: -14px;
}
`