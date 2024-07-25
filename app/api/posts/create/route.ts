import { NextResponse } from 'next/server';
import {db} from '../../../lib/db'

export async function POST(req: Request){
    try{
        const body  = await req.json();

          const posts = await db.post.create({
            data:{
                title:body.title,
                content:body.content,
                tagId:body.tagId
            }
          });
             return NextResponse.json(posts,{status:200})
    }catch(error){
        return NextResponse.json({message:'could not create post'},{status:500})
    }
} 