import type { ImageInterface } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import Image from 'next/image'

const ImagesContent = ({
  name,
  year,
  artist,
  images,
  source,
  description
}: ImageInterface): JSX.Element => {
  
  const { thumbnail } = images

  return (
    <article>
      <Image src={thumbnail} alt={`${name} - by ${artist}`} layout="fill"/>
    </article>
  )
}

export default ImagesContent
