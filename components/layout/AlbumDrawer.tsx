'use client'

import {BookImage, Home, Images} from 'lucide-react'
import { Drawer } from 'vaul'
import type { AlbumType } from '~/types'
import type { AlbumListProps } from '~/types/props'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'

export default function AlbumDrawer(props: Readonly<AlbumListProps>) {
  const router = useRouter()
  const pathname = usePathname()

  const iconClasses = 'text-xl text-default-500 pointer-events-none shrink-0'

  const activeClasses = 'bg-gray-100 text-black rounded-small'
  const closeClasses = 'flex items-center space-x-2 w-full p-1 rounded-small active:scale-95 duration-200 ease-in-out'

  return (
    <Drawer.Root>
      <Drawer.Trigger className="focus-visible:outline-none">
        <Images size={20} aria-label="相册" className="rounded dark:text-white" />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background focus-visible:!outline-none">
          <Drawer.Title></Drawer.Title>
          <div className="p-4 bg-white dark:bg-zinc-800 rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-gray-300 mb-2" />
            <div className="flex flex-col gap-4">
              <div className="w-full px-1 py-2 rounded-small">
                <div className="space-y-1" aria-label="移动端菜单">
                  <div
                    key="home"
                    onClick={() => router.push('/')}
                    className={pathname === '/' ? activeClasses : ''}
                  >
                    <Drawer.Close className={closeClasses}>
                      <Home size={20} className={iconClasses} /><p>首页</p>
                    </Drawer.Close>
                  </div>
                  {Array.isArray(props.data) && props.data?.map((album: AlbumType) => (
                    <div
                      key={album.id}
                      onClick={() => router.push(album.album_value)}
                      className={pathname === album.album_value ? activeClasses : ''}
                    >
                      <Drawer.Close className={closeClasses}>
                        <BookImage size={20} className={iconClasses}/><p>{album.name}</p>
                      </Drawer.Close>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              <a
                className="text-xs text-zinc-600 flex items-center gap-0.25"
                href="https://github.com/besscroft/PicImpact"
                target="_blank"
              >
                GitHub
                <svg
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="16"
                  aria-hidden="true"
                  className="w-3 h-3 ml-1"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                </svg>
              </a>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}