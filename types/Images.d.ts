interface ArtistInterface {
  image: string
  name: string
  artistwidth: number
  artistheight: number
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
  id?: number
  name: string
  year: number
  description: string
  source: string
  artist: ArtistInterface
  images: ImagesProperties
}
