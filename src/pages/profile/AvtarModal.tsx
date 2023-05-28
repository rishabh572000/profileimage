import React, {useRef, useState} from 'react'
import avtar1 from '../../media/char1.jpg'
import avtar2 from '../../media/char2.jpg'
import avtar3 from '../../media/char3.jpg'
import avtar4 from '../../media/char4.jpg'
import avtar5 from '../../media/char5.jpg'
import avtar6 from '../../media/char6.jpg'
// import avtar6 from '../../media/char6.jpg'
import avtar7 from '../../media/char7.jpg'
import avtar8 from '../../media/char8.jpg'
import { BsCameraFill, BsImageFill, BsEmojiSunglasses } from 'react-icons/bs'
import Image from 'next/image'

function AvtarModal({showimageModal, cameraImage, handleCamera}) {
    const profilePicRef = useRef()


return (
<>
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
    <div className='relative w-auto my-6 mx-auto max-w-3xl'>
      <div className='sm:py-4 sm:px-2 py-8 px-7'>
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-w-[762px]'>
            <div className='flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t'>
            <h3 className='text-xl font-semibold px-2'>Select an Avtar</h3>
            <button
                className=' ml-auto flex items-center justify-center  text-black border-2 rounded-full h-8 w-8 float-right text-3xl leading-none font-extralight outline-none focus:outline-none'
                onClick={() => showimageModal({result:false, type:'avtar'})}
            >
                <span className=' text-[#B8BBBF] text-4xl ' title='Close'>×</span>
            </button>
            </div>
            <div className='relative p-6 flex-auto'>
            <div className='grid text-center grid-cols-5 gap-4 '>
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden ' onClick={()=>cameraImage({result:avtar1, type:'avtar'})}>
              <Image src={avtar1} alt='image'  />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar2, type:'avtar'})}>
              <Image src={avtar2} className='object-cover' alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar3, type:'avtar'})}>
              <Image src={avtar3} alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden'  onClick={()=>cameraImage({result:avtar4, type:'avtar'})}>
              <Image src={avtar4} alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar5, type:'avtar'})}>
              <Image src={avtar5} className='object-cover' alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar6, type:'avtar'})}>
              <Image src={avtar6} alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar7, type:'avtar'})}>
              <Image src={avtar7} alt='image' />
            </div> 
            <div className='border border-red-500 cursor-pointer rounded-full overflow-hidden' onClick={()=>cameraImage({result:avtar8, type:'avtar'})}>
              <Image src={avtar8} alt='image' />
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

export default AvtarModal