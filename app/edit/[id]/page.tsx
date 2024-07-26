'use client'

import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/dataTypes'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

interface  EditPostPageProps{
  params:{
    id:string;

  },
}

const EditPostPage: FC<EditPostPageProps> = ({params}) => {
  const  router = useRouter();
  const { id } = params

  const {data: dataPost, isLoading: isLoadingPost} = useQuery({
    queryKey:['posts', id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    }
  });


  const {mutate: updatePost, isLoading: isLoadingSubmit }  =
   useMutation({
    mutationFn: (newPost:FormInputPost) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    }, 
    onError: (error)=>{
      console.error(error);;
    } ,
    onSuccess:() =>{
      router.push('/')
      router.refresh();
    }
  });

    const handleEditPost: SubmitHandler<FormInputPost> = (data) =>{
      updatePost(data);
      }

      if(isLoadingPost){
        <div className='text-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      }
        return (
          <div>
              <h1 className='text-2xl my04 font-bold text-center'>Edit Post</h1> 
              <FormPost isLoadingSubmit ={isLoadingSubmit } 
              submit={handleEditPost} initialValue={dataPost}
               isEditing />
          </div>
        )
}

export default EditPostPage