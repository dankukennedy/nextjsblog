'use client';
import React from 'react'
import { FC } from 'react'
import { FormInputPost } from '../dataTypes/index'
import { SubmitHandler, useForm } from 'react-hook-form'
 
interface FormPostProps {
    submit: SubmitHandler<FormInputPost>;
    isEditing: boolean
}

 const FormPost: FC<FormPostProps> = ({submit, isEditing}) => {
    const{ register, handleSubmit } = useForm<FormPostProps>();

  return (
     <form 
     onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
        <input type="text" 
         {...register('title',{required: true})}
            placeholder='Post Title' className='input input-bordered w-full max-w-lg' /> 
          <textarea {...register('content',{required: true})}
             className='textarea textarea-bordered w-full max-w-lg' 
            placeholder='Post Content'>
          </textarea>
        <select {...register('tag',{required: true})} className='select select-bordered w-full max-w-lg'
            defaultValue={''}
         >
            <option disabled selected value=''>
                Select Tags
            </option> 
            <option>JavaScript</option>
            <option>PHP</option>
            <option>Phython</option>
      </select>
        
        <button type='submit' className='btn btn-primary w-full max-w-lg'>
       {isEditing ? 'Update': 'Create'}
         </button>
     </form>
  )
}

export default FormPost;