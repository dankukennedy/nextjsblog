'use client'

import FormPost from '@/components/FormPost'
import { FormInputPost } from '@/dataTypes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { FC } from 'react'
import { SubmitHandler } from 'react-hook-form'

interface  EditPostPageProps{
  params:{
    id:string
  },
}

const EditPostPage: FC<EditPostPageProps> = ({params}) => {
  const {id} =params

  const {data: dataPost, isLoading: isLoadingPost} = useQuery({
    queryKey:['posts', id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    }
  });
 
    const handleEditPost: SubmitHandler<FormInputPost> = (data) =>{
        console.log(data)
      }
      if(isLoadingPost){
        <div className='text-center'>
          <span className='loading loading-spinner loading-lg'></span>
        </div>
      }
        return (
          <div>
              <h1 className='text-2xl my04 font-bold text-center'>Edit Post</h1>
              <FormPost submit={handleEditPost} initialValue={dataPost} isEditing/>
          </div>
        )
}

export default EditPostPage