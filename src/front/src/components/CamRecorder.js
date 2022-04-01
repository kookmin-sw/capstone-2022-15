// import React from 'react';
// import RecordRTC from 'recordrtc'
// import WebCam from 'react-webcam'
// import { UploadVideo, UploadAudio } from '../_Api/User';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom'


// const videoStyle={
//     height:250,
//     width:500
// }

// const WebCamPages = (props)=>{
     
//      let recorder = null
//      let webRef = React.useRef()
//      let audioRecorder = null
//      const [src, setSrc] = React.useState(null)

//     React.useEffect(()=>{
//         CheckStartVideo()
    
//     },[])
//      const CheckStartVideo = ()=>{
//          if(window.confirm('Start Recording')){
//              if(!hasGetUserMedia()){
//                 alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.")
//                 return
//              }
//              console.log('hello')
//              CaptureVideo()
             
//          }else{
//              props.history.push('/')
           
//          }
//      }
//      const  hasGetUserMedia = ()=> {
//         return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
//                       navigator.mozGetUserMedia || navigator.msGetUserMedia);
//       }
//      const CaptureVideo =()=>{
         
//             navigator.getUserMedia({
//                 video: true,
//                 audio:false
                
                
//             }, (stream)=>{
//                 recorder = RecordRTC(stream, {
//                             type: 'video/mp4',
//                             canvas: {
//                                 width: 440,
//                                 height: 340
//                             },
//                         })
//                 recorder.startRecording()
//                 CaptureAudio()
//             } , err=>{
//                 console.log(err)
          

//             })
//      }

//      const CaptureAudio = ()=>{
//         navigator.getUserMedia({
//               audio: true
//         },(stream)=>{
//             audioRecorder = RecordRTC(stream, {
//                 type: 'audio/wav',
//                 recorderType: RecordRTC.StereoAudioRecorder
//             })

           
//             audioRecorder.startRecording()
//         }, err=>{
//             console.log(err)
//         })
//   }
//      const UploadRecording = ()=>{
//          recorder.stopRecording(()=>{

//              audioRecorder.stopRecording(()=>{
//                 let blobVideo = recorder.getBlob();
//                 let blobAudio = audioRecorder.getBlob();
//                 console.log(blobAudio)
                
//                 // recorder.stream.stop()
//                 // audioRecorder.stream.stop()
//                 let url = URL.createObjectURL(blobVideo)
//                 let url2 = URL.createObjectURL(blobAudio)
//                 console.log(url, url2)
//                 let videoProcess = new FormData()
//                 let audioProcess = new FormData()
//                 videoProcess.append('video', blobVideo)
//                 audioProcess.append('audio', blobAudio)
//                 UploadVideo(videoProcess, props.user.id, props.test_id)
//                    .then(res=>{
//                        UploadAudio(audioProcess, props.user.id, props.test_id)
//                             .then(res=>{console.log(res.data)
//                                window.close()
//                             })
//                             .catch(err=>console.log(err))
                      
//                    })
//                    .catch(err=>{console.log(err)})
               
//              })
             
//          })
//      }

   
//     return(
//         <div className="webcam">
//         <WebCam
//         videoConstraints={videoStyle}
//         />
       
//         <div className="container">
//             <div className="text-center mt-5">
//                 <div className="title">
//                     <p className="h5">InterView are based on your video stream</p>
//                 </div>
//             </div>
//         </div>

//        <div className="update-btn webcam-btn">
//         <button className="btn" onClick={UploadRecording}>Submit</button>
//         </div>
//         </ div>
//     )
// }

// function mapStateToProps(state){
//     return{
//         user: state.user.user
//     }
// }

// const WebCamPage = withRouter(connect(mapStateToProps, null)(WebCamPages))
// export {WebCamPage}