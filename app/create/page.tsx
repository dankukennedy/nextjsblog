'use client'
import FormPost from '@/components/FormPost';
import React from 'react'
import { FormInputPost }  from '../../dataTypes/index'
import {SubmitHandler } from 'react-hook-form'
import BackButton from '@/components/BackButton';


const CreatePage = () => {
const handleCreatePost: SubmitHandler<FormInputPost> = (data) =>{
  console.log(data)

}
  return (
    <div>
      <BackButton />
        <h1 className='text-2xl my04 font-bold text-center'>Add New Post</h1>
         <FormPost submit={handleCreatePost}  isEditing={false}/>
    </div>
  )
}

export default CreatePage;