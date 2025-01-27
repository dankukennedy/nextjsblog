import { Tag } from '@prisma/client';
import Link from 'next/link'
import React from 'react'
import {FC} from 'react'
interface PostCardProps{
  post:{
    id:string,
    title:string,
    content:string,
    tag:Tag;
  }
}

const PostCard:FC <PostCardProps> = ({post}) => {
  const {id, title, content,tag} = post

  return (
    <div className="card bg-base-100 w-full shadow-xl border">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{content.slice(0,30)}</p>
      <div className="card-actions justify-end">
        <span className='badge badge-neutral'>{tag.name}</span>
       <Link href={`/blog/${id}`} className='hover:underline'>
         Read More....
       </Link>
      </div>
     </div>
   </div>
  )
}

export default PostCard