import type { ImageInterface } from '../../types/Images'
import homeStyles from '../../styles/Home.module.css'
import Images from './Images'

type HomeContentProps = {
  images: Array<ImageInterface>
}
const HomeContainer = ({ images }: HomeContentProps): JSX.Element => {
  return (
    <section className={homeStyles.container}>
      {images.map((image) => (
	<Images
	  key={image.name}
	  {...image}
        />
      ))}
    </section>
  )
}

export default HomeContainer
