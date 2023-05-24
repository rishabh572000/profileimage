import React, {useRef, useState} from 'react'
import prodileImage from '../../media/profile.jpg'
import { AiFillCamera } from 'react-icons/ai'

function ProfileImage() {
    const profilePicRef = useRef()
    const [profilePic, setProfilePic] = useState(null)

    const [viewShowModal, setViewShowModal] = useState(false)
    const handleFileChange = (e) => {
        const image = e?.target?.files[0]
          setProfilePic(image)
        
      }
    
return (
  <>
<div>
<div className='py-4 flex justify-center'>
    <div className='relative w-24 h-24 '>
    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white w-28'>
        Profile picture
    </label>
    <input
        type='file'
        accept='image/png, image/jpg, image/jpeg'
        name='image'
        ref={profilePicRef}
        onChange={handleFileChange}
        className='hidden'
    />

    <img
        src={
        profilePic
            ? URL.createObjectURL(profilePic)
            : prodileImage
        }
        fallbackUrl={prodileImage}
        className='w-24 h-24'
        alt=''
        style={{ borderRadius: '50%' }}
    />
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
        onClick={() => profilePicRef?.current?.click()}
    />
    </div>
</div>
<div className='text-center mt-4'>
    {/* <ErrorMessage message={profilePicError} /> */}
</div>
</div>


<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <form
            // onSubmit={handleSubmit(onSubmit)}
            className='sm:py-4 sm:px-2 py-8 px-7'
          >
            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-w-[762px]'>
              <div className='flex items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                <h3 className='text-xl font-semibold'>User Details</h3>
                <button
                  className=' ml-auto flex items-center justify-center  text-black border-2 rounded-full  h-8 w-8 float-right text-3xl leading-none font-extralight outline-none focus:outline-none'
                  onClick={() => setViewShowModal(false)}
                >
                  <span className=' text-[#B8BBBF]  text-4xl ' title='Close'>×</span>
                </button>
              </div>
              <div className='relative p-6 flex-auto'>
                <div className='grid grid-cols-2'>
                  <div>
                    <div className='sm:py-4 sm:px-2 py-8 px-7'>

                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='text'
                          name='user_name'
                          id='user_name'
                          disabled
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer'
                          placeholder=' '
                        //   {...register('user_name', {
                        //   })}
                        />
                        <label
                          htmlFor='user_name'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          User name
                        </label>
                      </div>
                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='text'
                          name='followers'
                          id='followers'
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer'
                          placeholder=' '
                          required
                          disabled
                        //   {...register('followers', {
                        //     required: true
                        //   })}
                        />
                        <label
                          htmlFor='followers'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          Followers
                        </label>
                      </div>

                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='text'
                          name='likes'
                          id='likes'
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer'
                          placeholder=' '
                          required
                          disabled
                        //   {...register('likes', {
                        //   })}
                        />
                        <label
                          htmlFor='likes'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          Likes
                        </label>
                      </div>

                    </div>
                  </div>
                  <div>
                    <div className='sm:py-4 sm:px-2 py-8 px-7'>
                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='number'
                          name='video_post'
                          id='video_post'
                          disabled
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none max-w-lg focus:ring-0  peer'
                          placeholder=' '
                          required
                        //   {...register('video_post', {

                        //   })}
                        />
                        <label
                          htmlFor='video_post'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          Video Posted
                        </label>
                      </div>
                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='text'
                          name='user_status'
                          id='user_status'
                          disabled
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none max-w-lg focus:ring-0  peer'
                          placeholder=' '
                          required
                        //   {...register('user_status', {

                        //   })}
                        />
                        <label
                          htmlFor='user_status'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          User Status
                        </label>
                      </div>

                      <div className='relative z-0 mb-6 w-full group'>
                        <input
                          type='text'
                          name='monetization'
                          id='monetization'
                          disabled
                          className='block py-4 px-3 w-full text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#DFDFDF] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none max-w-lg focus:ring-0  peer'
                          placeholder=' '
                          required
                        //   {...register('monetization', {

                        //   })}
                        />
                        <label
                          htmlFor='monetization'
                          className='peer-focus:font-normal absolute text-sm text-[#A5A5A5] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-3 bg-white p-2 z-10 origin-[2] peer-focus:left-0 peer-focus:text-[#A5A5A5] peer-focus:text-lg peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8'
                        >
                          Monetization
                        </label>
                      </div>

                      {/* <div className='relative z-0 mb-6 w-full group' style={{ height: '56px' }} /> */}

                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                  className='text-black bg-[#E1E1E1] font-normal px-12 py-2.5 text-sm outline-none focus:outline-none rounded mr-6  ease-linear transition-all duration-150'
                  type='button'
                  onClick={() => setViewShowModal(false)}
                >
                  Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  </>
)
}

export default ProfileImage