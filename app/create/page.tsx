'use client'
import FormPost from '@/components/FormPost';
import React from 'react'
import { FormInputPost }  from '../../dataTypes/index'
import {SubmitHandler } from 'react-hook-form'
import BackButton from '@/components/BackButton';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreatePage = () => {
  const router = useRouter()
const handleCreatePost: SubmitHandler<FormInputPost> = (data) =>{
  createPost(data)
}
 
const {mutate: createPost, isLoading:isLoadingSubmit }  = useMutation({
  mutationFn: (newPost:FormInputPost) => {
    return axios.post('api/posts/create', newPost)
  }, 
  onError: (error)=>{
    console.error(error);;
  } ,
  onSuccess:() =>{
    router.push('/')
    router.refresh();
  }
});

  return (
    <div>
      <BackButton />
        <h1 className='text-2xl my04 font-bold text-center'>Add New Post</h1>
         <FormPost
         submit={handleCreatePost}
         isEditing={false}
         isLoadingSubmit={isLoadingSubmit}
         />
    </div>
  )
}

export default CreatePage;