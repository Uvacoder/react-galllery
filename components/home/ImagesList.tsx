import type { ImageInterface } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import ImageItem from './ImageItem'

type HomeContentProps = {
  images: Array<ImageInterface>
}
const HomeContainer = ({ images }: HomeContentProps): JSX.Element => {
  return (
    <section className={homeStyles.container}>
      {images.map((image) => (
	<ImageItem
	  key={image.name}
	  {...image}
        />
      ))}
    </section>
  )
}

export default HomeContainer
