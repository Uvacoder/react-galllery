import type { TImages } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'

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
    <div className={homeStyles.imgCard}>
      <p>{author}</p>
    </div>
  )
}

export default ImagesContent
