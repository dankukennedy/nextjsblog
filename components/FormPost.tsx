'use client';
import React from 'react'
import { FC } from 'react'
import { FormInputPost } from '../dataTypes/index'
import { useQuery } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import   axios  from  'axios'
import { Tag } from '@prisma/client';
 
interface FormPostProps {
    submit: SubmitHandler<FormInputPost>;
    isEditing: boolean;
    initialValue?: FormInputPost;
    isLoadingSubmit : boolean;
    
}

 const FormPost: FC<FormPostProps> = ({ submit, isEditing, initialValue,isLoadingSubmit}) => {
    const{ register, handleSubmit } = useForm<FormInputPost>( {
      defaultValues: initialValue,
   } );

    // fetch list tags
    const {data:dataTags, isLoading: isLoadingTag} = useQuery<Tag[]>({
      queryKey :['tags'],
      queryFn: async () =>{
         const response = await axios.get('/api/tags');
         return response.data;
      }
    })
    //console.log(dataTags); 

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
        {isLoadingTag ?
        <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
       </div>
        :
        <select {...register('tagId',{required: true})} className='select select-bordered w-full max-w-lg'
            defaultValue={''}
         >
            <option disabled  value=''>
                Select Tags
            </option>
            {dataTags?.map((item )=>(
               <option key={item.id} value={item.id}> {item.name}
               </option>
            ))}

      </select>}
        <button type='submit' className='btn btn-primary w-full max-w-lg'>
         {isLoadingSubmit && <span className='loading loading-spinner'></span>}
          {isEditing 
           ?isLoadingSubmit 
           ? 'Updating..'
            :'Update'
            :isLoadingSubmit
            ?'Creating...'
            :'Create'
           }
         </button>
     </form>
  )
}
 
export default FormPost;