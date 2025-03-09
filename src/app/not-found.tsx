import Link from 'next/link';
import { Button } from 'antd';

export default function NotFound() {
    return (
        <main className="w-full h-screen top-0 left-0 right-0 bottom-0 absolute flex items-center justify-center bg-white z-50 px-0 py-24">
            <div className="text-center">
                <p className="text-2xl font-semibold font-mono text-indigo-600">404</p>
                <h1 className="h1-404 mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900">页面没有找到！！</h1>
                <p className="mt-6 text-pretty text-lg font-medium text-gray-500">抱歉，我们找不到您要查找的页面。.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
                    <Button type='link' href='mailto:ciraos@yeah.net' className='text-sm font-semibold text-gray-900'>联系开发者 <span aria-hidden="true">&rarr;</span></Button>
                </div>
            </div>
        </main>
    )
}
