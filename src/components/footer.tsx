import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="footer w-full h-max py-2 bottom-0 absolute text-center">
                <Link target="_blank" rel="noopener noreferrer" className="mt-4 text-slate-600 dark:text-slate-300" href="https://beian.miit.gov.cn">皖ICP备2023018992号-1</Link>
                <div className="dark:text-slate-200">All rights reserved to ©葱苓sama 2024 - {new Date().getFullYear()}</div>
                <div>
                    <span className="dark:text-white">自豪地使用</span><Link href="https://zh-hans.react.dev/" target="_blank" rel="noopener noreferrer" className="ml-1 text-slate-600 dark:text-slate-300">React</Link><span className="mx-1"><span className="dark:text-white">+</span></span><Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300">Nextjs</Link>
                </div>
            </div>
        </>
    )
}
