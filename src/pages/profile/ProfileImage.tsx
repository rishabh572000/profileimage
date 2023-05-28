import React, {useRef, useState} from 'react'
import prodileImage from '../../media/profile.jpg'
import { AiFillCamera } from 'react-icons/ai'
import { BsCameraFill, BsImageFill, BsEmojiSunglasses } from 'react-icons/bs'
import Image from 'next/image'
import AskModal from './AskModal'
import ImageCroper from './ImageCroper'
import CameraClick from './CameraClick'
import AvtarModal from './AvtarModal'
import { ModalWrapper } from './hooks/ModalWrapper'

function ProfileImage() {
    const profilePicRef = useRef()
    const [profilePic, setProfilePic] = useState(null)
    const [cropedImage, setCropedImage] = useState(null)
    const [askModal, setAskModal] = useState(false)
    const [imageModal, setImageModal] = useState(false)
    const [cameraModal, setCameraModal] = useState(false)
    const [avtarModal, setAvtarModal] = useState(false)
    const [open, setOpen] = useState()

    // const opener = {
    //   onClick: () => {
    //     console.log('Opener clicked');
    //   },
    //   render: (handleClick) => (
    //     <button onClick={handleClick}>Open Modal</button>
    //   ),
    // };

  const handleFileChange = (e) => {
      const image = e?.target?.files;
        const reader = new FileReader();
        reader.onload = () => {
          setProfilePic(reader.result as any);
        };
        reader.readAsDataURL(image[0]);
        setAskModal(false)
        setImageModal(true)
  }
  
  const showAskModal = (newValue) => {
    setAskModal(newValue);
  };
  const handleCamera = (type) =>{
    if(type==='avtar'){
      setAvtarModal(true)
    }
    else if(type==='camera'){
      setCameraModal(true)
    }
    setAskModal(false)
  }
  const cameraImage = ({result, type}) =>{
    if(type==='camera'){
      setProfilePic(result)
      setCameraModal(false)
    }
    else if(type==='avtar'){
      setProfilePic(result.src)
      setAvtarModal(false)
    }
    setImageModal(true)
  }

  const showImageModal = ({result, type}) => {
    if(type==='croper'){
      setImageModal(result);
    }
    else if(type==='camera'){
      setCameraModal(result);
    }
    else if(type==='avtar'){
      setAvtarModal(result);
    }
  };
  const getCropData = (cropperRef) => {
    if (typeof cropperRef !== "undefined") {
      setCropedImage(cropperRef.getCroppedCanvas().toDataURL());
    }
    setImageModal(false);
    setProfilePic(null)
  };


    
return (
  <>
<div>
<div className='py-4 flex justify-center'>
    <div className='relative w-24 h-24 '>
    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white w-28'>
        Profile picture
    </label>

<ModalWrapper opener={open}>
<Image className='w-24 h-24' src={cropedImage ? cropedImage : prodileImage} alt="cropped" width={'100'} height={'100'} onClick={()=>setOpen(new Date())} style={{ borderRadius: '50%', width: "100%", height:'auto', border:'1px solid #000' }} />
</ModalWrapper>


{/* <Image className='w-24 h-24' src={cropedImage ? cropedImage : prodileImage} alt="cropped" width={'100'} height={'100'} style={{ borderRadius: '50%', width: "100%", border:'1px solid #000' }} /> */}

    <AiFillCamera
        className=' bg-gray-100  absolute w-4 rounded-xl cursor-pointer'
        style={{
        width: '1.5rem',
        height: '1.5rem',
        bottom: '-23px',
        right: 0,
        background: '',
        padding: '1px'
        }}
        onClick={()=>setAskModal(true)}
    />
    </div>
</div>
<div className='text-center mt-4'>
</div>
</div>


{askModal && <AskModal showAskModal={showAskModal} handleFileChange={handleFileChange} handleCamera={handleCamera} />}
{imageModal && <ImageCroper showimageModal={showImageModal} image={profilePic} cropedImage={getCropData} />}
{cameraModal && <CameraClick showimageModal={showImageModal} cameraImage={cameraImage} />}
{avtarModal && <AvtarModal showimageModal={showImageModal} cameraImage={cameraImage} cropedImage={getCropData} />}
  </>
)
}

export default ProfileImage