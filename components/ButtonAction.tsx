import Link from 'next/link'
import React from 'react'
import {Pencil,Trash} from 'lucide-react'

const ButtonAction = () => { 
  return (
    <div>
        <Link href='edit/id/1' className='btn mr-2'>
        <Pencil />Edit
        </Link>
        <button className='btn btn-error'>
            <Trash />DELETE
        </button>
    </div>
  )
}

export default ButtonAction