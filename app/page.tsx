import Image from "next/image";
import PostCard from "../components/PostCard"
import {db} from './lib/db'


 async function getPost(){
  const response = await db.post.findMany()
  return response;
 }

export default async function Home() {
  const posts =  await getPost();
  console.log(posts)
  
  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" >
     <PostCard />
     <PostCard />
     <PostCard />
     <PostCard />
     <PostCard />
     <PostCard />
    </main>
  );
}
