import React, {useRef, useState} from 'react'
import { BsCameraFill, BsImageFill, BsEmojiSunglasses } from 'react-icons/bs'

function AskModal({showAskModal, handleFileChange, handleCamera}) {
    const profilePicRef = useRef()


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
                onClick={() => showAskModal(false)}
            >
                <span className=' text-[#B8BBBF] text-4xl ' title='Close'>×</span>
            </button>
            </div>
            <div className='relative p-6 flex-auto'>
            <div className='grid text-center grid-cols-3'>
                <div className='flex flex-col justify-center items-center'>
                <div className='p-3 border-2 border-black-800 rounded-full' onClick={()=>handleCamera('camera')}>
                <BsCameraFill className='text-center' />
                </div>
                <p>Camera</p>
                </div> 
                <div className='flex flex-col justify-center items-center'>
                <input
                type='file'
                accept='image/png, image/jpg, image/jpeg'
                name='image'
                ref={profilePicRef}
                onChange={(e)=>handleFileChange(e)}
                className='hidden'
                />
                <div className='p-3 border-2 border-black-800 rounded-full' onClick={() => profilePicRef?.current?.click()}>
                <BsImageFill />
                </div>
                <p>Gallery</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <div className='p-3 border-2 border-black-800 rounded-full' onClick={()=>handleCamera('avtar')}>
                <BsEmojiSunglasses />
                </div> 
                <p>Avatar</p>
                </div>
            </div>
            
            </div>

        </div>
        </div>
    </div>
    </div>
</>
)
}

export default AskModal