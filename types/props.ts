// 业务专用类型

import { AlbumType, ImageType } from '~/types/index.ts'

export type AlbumDataProps = {
  data: AlbumType[]
  customFoldAlbumEnable: boolean
  customFoldAlbumCount: number
}

export type HandleProps = {
  handle: () => any
  args: string
}

export type ImageServerHandleProps = {
  handle: (pageNum: number, tag: string) => any
  args: string
  totalHandle: (tag: string) => any
}

export type ImageHandleProps = {
  handle: (pageNum: number, tag: string) => any
  args: string
  album: string
  totalHandle: (tag: string) => any
  configHandle: () => any
  randomShow?: boolean
}

export type LinkProps = {
  handle: () => any
  args: string
  data: any
}

export type AlbumListProps = {
  data: AlbumType[]
}

export type ImageDataProps = {
  data: ImageType
}

export type ImageListDataProps = {
  data: ImageType[]
}

export type AnalysisDataProps = {
  data: {
    total: number;
    showTotal: number;
    crTotal: number;
    tagsTotal: number;
    cameraStats: Array<{
      camera: string;
      lens: string;
      count: number;
    }>;
    result: Array<{
      name: string;
      value: string;
      total: number;
      show_total: number;
    }>;
  }
}