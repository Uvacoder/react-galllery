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
  console.log(images)

  return (
    <article className={homeStyles.imgCard}>
      <Link href="/" passHref>
        <figure className={homeStyles.imgFigure}>
          <Image
            alt={`${name} - by ${artistName}`}
            height={thumbheight}
            src={thumbnail}
            width={thumbwidth}
          />
          <figcaption className={homeStyles.imgFlex}>
            <h1 className={homeStyles.imgName}>{name}</h1>
            <h3 className={homeStyles.imgAuthor}>{artistName}</h3>
          </figcaption>
        </figure>
      </Link>
    </article>
  )
}

export default ImagesContent
