import Image from 'next/image'
import Link from 'next/link'
import type { ImageInterface } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'

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

  return (
    <div className={homeStyles.imgCard}>
      <Link href="/">
        <>
          <img
            alt={`${name} - by ${artistName}`}
            src={thumbnail}
            className={homeStyles.img}
          />
          <article className={homeStyles.imgText}>
            <h1 className={homeStyles.imgName}>{name}</h1>
            <h3 className={homeStyles.imgAuthor}>{artistName}</h3>
          </article>
        </>
      </Link>
    </div>
  )
}

export default ImagesContent
