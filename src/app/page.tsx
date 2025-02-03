'use client';
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react";

import avatar from "@/app/image/avatar.avif"
import { Icon } from "@iconify/react";
import moment from "moment";

export default function Home() {
  useEffect(() => { })
  return (
    <>
      <div className="py-4 px-6 flex justify-around max-425:flex-col-reverse">
        <div className="flex flex-col justify-center max-425:mt-4 max-425:text-center">
          <div className="text-6xl font-semibold font-serif dark:text-slate-300">葱苓sama</div>
          <div className="text-lg font-mono dark:text-slate-300">Don&apos;t worry, be happy.</div>
          <div className="mt-4 flex items-center gap-2 dark:text-slate-400 max-425:justify-center">
            <Link href="https://github.com/ciraos" target="_blank" rel="noopener noreferrer"><Icon icon="iconoir:github" width="24" height="24" /></Link>
            <Link href="mailto:ciraos@yeah.net"><Icon icon="material-symbols-light:mail-outline-sharp" width="28" height="28" /></Link>
            <Link href="https://blog.ciraos.top" className="px-1 border-l-[1px] border-solid border-black">博客</Link>
            <Link href="https://pan.ciraos.top" target="_blank" rel="noopener noreferrer">网盘</Link>
            <Link href="https://stat.ciraos.top/status/myserver" target="_blank" rel="noopener noreferrer">监控</Link>
            <Link href="https://" target="_blank" rel="noopener noreferrer"></Link>
          </div>
        </div>
        <Image src={avatar} alt="avatar" className="w-72 h-72 rounded-full border-2 border-solid border-white animate-pulse hover:animate-none max-425:mx-auto" priority />
      </div>
    </>
  )
}
