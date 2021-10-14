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
    <article className={homeStyles.imgCard}>
      <Image className={homeStyles.img} src={thumbnail} alt={`${name} - by ${artist}`} layout="fill"/>
      <h1 className={homeStyles.imgAuthor}>{name}</h1>
    </article>
  )
}

export default ImagesContent
