import { useEffect } from "react";
import { useModal } from "./useModal";
import { BsCameraFill, BsImageFill, BsEmojiSunglasses } from 'react-icons/bs'

export const ModalWrapper = ({ opener, children }) => {
    const { isOpen, openModal, closeModal } = useModal();
  console.log(opener)
    // const handleOpenerClick = () => {
    //   openModal();
    //   opener.onClick();
    // };
    useEffect(()=>{
      if(opener != null){
        openModal()
      }
      
    }, [opener])
  
return (
  <>
    {/* {opener.render(handleOpenerClick)} */}

    {/* {isOpen && (
      <div className="modal">
        <div className="modal-content">
          {children}
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </div>
    )} */}
    {children}

    {isOpen && (
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative w-auto my-6 mx-auto max-w-3xl'>
        <div className='sm:py-4 sm:px-2 py-8 px-7'>
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-w-[762px]'>
            <div className='flex items-center justify-between p-2 border-b border-solid border-slate-200 rounded-t'>
            <h3 className='text-xl font-semibold px-2'>Profile photo</h3>
            <button
                className=' ml-auto flex items-center justify-center  text-black border-2 rounded-full h-8 w-8 float-right text-3xl leading-none font-extralight outline-none focus:outline-none'
                onClick={closeModal}
            >
                <span className=' text-[#B8BBBF] text-4xl ' title='Close'>×</span>
            </button>
            </div>
            <div className='relative p-6 flex-auto'>
            <div className='h-auto'>
              
            {children}
        
            </div>
            
            </div>

        </div>
        </div>
      </div>
      </div>
    )}
    
  </>
);
  };