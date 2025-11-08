"use client"
import Link from "next/link";


export default function Posts(){

    return <div>
        <Link href={'/post/1'}>Post1</Link><br/>
        <Link href={'/post/2'}>Post2</Link><br/>
        <Link href={'/post/3'}>Post3</Link><br/>
    </div>

}