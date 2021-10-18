import type { ImageInterface } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import Image from 'next/image'

const ImagesContent = ({
  name,
  year,
  artist,
  images,
  source,
  description,
}: ImageInterface): JSX.Element => {
  const {
    thumbnail,
    hero,
    thumbwidth,
    thumbheight,
    gallery,
    smallheight,
    smallwidth,
  } = images
  const artistName = artist.name
  console.log(images)

  return (
    <article className={homeStyles.imgCard}>
      <div className={homeStyles.imgFlex}>
        <h1 className={homeStyles.imgName}>{name}</h1>
        <h3 className={homeStyles.imgAuthor}>{artistName}</h3>
      </div>
    </article>
  )
}

export default ImagesContent
