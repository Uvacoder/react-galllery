import type { TImages } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import Images from './Images'

type HomeContentProps = {
  images: Array<TImages>
}
const HomeContainer = ({ images }: HomeContentProps): JSX.Element => {
  return (
    <div className={homeStyles.container}>
      {images.map((image) => (
	<Images
	  author={image.author}
          download_url={image.download_url}
          id={image.id}
          key={image.id}
          url={image.url}
        />
      ))}
    </div>
  )
}

export default HomeContainer
