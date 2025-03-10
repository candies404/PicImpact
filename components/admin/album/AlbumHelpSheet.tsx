'use client'

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '~/components/ui/sheet'
import { useButtonStore } from '~/app/providers/button-store-Providers'

export default function AlbumHelpSheet() {
  const { albumHelp, setAlbumHelp } = useButtonStore(
    (state) => state,
  )

  return (
    <Sheet
      defaultOpen={false}
      open={albumHelp}
      onOpenChange={(open: boolean) => {
        if (!open) {
          setAlbumHelp(false)
        }
      }}
      modal={false}
    >
      <SheetContent side="left" className="w-full overflow-y-auto scrollbar-hide">
        <SheetHeader>
          <SheetTitle>帮助</SheetTitle>
          <SheetDescription className="space-y-2">
            <span>
              您要展示除⌈首页⌋外的其它相册，需要添加新的⌈相册⌋，并标记为可显示状态。
            </span>
            <span>
              ⌈相册⌋的⌈路由⌋需要带 / 前缀。
            </span>
            <span>
              注意，如果您将⌈相册⌋设置为⌈禁用状态⌋，那么未登录时无法以任何方式获取该⌈相册⌋下的图片信息。
            </span>
            <span>
              相册启用数量大于 3 时，将会在导航栏中显示相册列表。
            </span>
            <span>
              只有⌈默认相册模式⌋下，才会将⌈首页⌋相册作为路由使用，且必须将⌈首页⌋相册设置为可显示状态。
            </span>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}