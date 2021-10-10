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
  const commonImgWidth:number = 200

  return (
    <div className={homeStyles.imgCard} id={id} title={url}>
      <Image className={homeStyles.img} src={download_url} layout="fill" alt={`${url} - ${author}`} />
      <p className={homeStyles.imgAuthor}>{author}</p>
    </div>
  )
}

export default ImagesContent
