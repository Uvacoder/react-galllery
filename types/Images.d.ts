export type TImages = {
  id: string
  author: string
  width?: number
  height?: number
  url: string
  download_url: string
}

interface ArtistInterface {
  image: string
  name: string
  artistwidth: string
  artistheight: string
}

interface ImagesProperties {
  gallerywidth: number
  galleryheight: number
  bigwidth: number
  bigheight: number
  smallwidth: number
  smallheight: number
  thumbwidth: number
  thumbheight: number
  thumbnail: string
  hero: {
    small: string
    large: string
  }
  gallery: string
}

export interface ImageInterface {
  name: string
  year: number
  description: string
  source: string
  artist: ArtistInterface
  images: ImagesProperties
}
