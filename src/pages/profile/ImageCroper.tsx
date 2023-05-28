import React, { useState, useRef, useEffect } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
// import "../../styles/Demo.css";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const ImageCroper: React.FC = ({image, cropedImage, showimageModal, aspectRatio=1}) => {
  const [cropData, setCropData] = useState("#");
  const cropperRef = useRef<ReactCropperElement>(null);
  // const onChange = (e: any) => {
  //   e.preventDefault();
  //   let files;
  //   if (e.dataTransfer) {
  //     files = e.dataTransfer.files;
  //   } else if (e.target) {
  //     files = e.target.files;
  //   }
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setImage(reader.result as any);
  //   };
  //   reader.readAsDataURL(files[0]);
  // };

  const getCropData = () => {
    cropedImage(cropperRef.current?.cropper)
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  // useEffect(() => {
  //   if (cropperRef.current) {
  //     const cropper = cropperRef.current.cropper;
  //     const minCropBoxWidth = (minCropBoxWidthPercentage / 100) * imageWidth;
  //     cropper.setOptions({ minCropBoxWidth });
  //   }
  // }, [imageWidth, minCropBoxWidthPercentage]);

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
            onClick={() => showimageModal({result:false, type:'croper'})}
        >
            <span className=' text-[#B8BBBF] text-4xl ' title='Close'>×</span>
        </button>
        </div>
        <div className='relative p-6 flex-auto'>
          <div>
            <div style={{ width: "100%" }}>
              <Cropper
                // style={{ height: 400, width: "100%" }}
                aspectRatio={aspectRatio}
                src={image}
                ref={cropperRef}
                viewMode={1}
                guides={true}
                zoomable = {false}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                checkOrientation={false}
              />
            </div>
              
              <div className="box">
                {/* <h1>
                  <span>Crop</span>
                  <button style={{ float: "right" }} onClick={getCropData}>
                    Crop Image
                  </button>
                </h1> */}
                {/* <img style={{ width: "100%" }} src={cropData} alt="cropped" /> */}
              </div>

          </div>
          
        </div>
        <div className='flex items-center justify-center p-3 border-t border-solid border-slate-200 rounded-b'>
        <button
            className='text-black bg-[#E1E1E1] font-normal px-12 py-2.5 text-sm outline-none focus:outline-none rounded mr-6  ease-linear transition-all duration-150'
            type='button'
            onClick={getCropData}
        >
            Crop
        </button>
        </div>
      </div>
      </div>
      </div>
      </div>

 
    </>

  );
};

export default ImageCroper;
