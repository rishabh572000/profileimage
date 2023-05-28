import React, {useState} from 'react';
import Webcam from 'react-webcam';

function CameraClick({showimageModal, cameraImage}) {
  const webcamRef = React.useRef(null);



  return (
<>
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
    <div className='relative w-auto my-6 mx-auto max-w-3xl'>
    <div className='sm:py-4 sm:px-2 py-8 px-7'>
    <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-w-[762px]'>
    <div className='flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t'>
    <h3 className='text-xl font-semibold px-2'>Profile photo</h3>
    <button
        className=' ml-auto flex items-center justify-center  text-black border-2 rounded-full h-8 w-8 float-right text-3xl leading-none font-extralight outline-none focus:outline-none'
        onClick={() => showimageModal({result:false, type:'camera'})}
    >
        <span className=' text-[#B8BBBF] text-4xl ' title='Close'>×</span>
    </button>
    </div>
    <div className='relative p-6 flex-auto'>
 
        <div style={{ width: "100%" }}>
            <Webcam
            audio={false}
            ref={webcamRef}
            width={'100%'}
            screenshotFormat="image/jpeg"
            />      
        </div>
     
    </div>
    <div className='flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b'>
    <button
        className='text-black bg-[#E1E1E1] font-normal px-12 py-2.5 text-sm outline-none focus:outline-none rounded mr-6  ease-linear transition-all duration-150'
        type='button'
        onClick={()=>cameraImage({result:webcamRef.current.getScreenshot(), type:'camera'})}
    >
        Capture
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>


</>

  );
}

export default CameraClick;