'use client';
import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CldInfo {
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('')
  return (
    <>
    {publicId && <CldImage src={publicId} alt='Uploaded image' width={270} height={180} />}
        <CldUploadWidget
        options={ {
            sources: ['local'],
            multiple: false,
            maxFiles: 5
        }}
        uploadPreset='wyzw8d7f'
        onSuccess={(result, widget) => setPublicId((result.info as CldInfo).public_id)}>
            { ( {open} ) =>
            <button 
            className='btn btn-primary'
            onClick={ () => open() }>Upload</button> 
            }
        </CldUploadWidget>
    </>
  )
}

export default UploadPage