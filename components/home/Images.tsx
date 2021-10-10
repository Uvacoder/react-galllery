import type { TImages } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import Image from 'next/image'

const ImagesContent = ({
  id,
  author,
  download_url,
  height,
  url,
  width,
}: TImages): JSX.Element => {

  return (
    <div>
      <Image
	className={homeStyles.img}
        src={download_url}
        alt={author}
        key={id}
        loading="lazy"
	layout="fill"
      />
    </div>
  )
}

export default ImagesContent
