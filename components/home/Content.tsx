import type { TImages } from '../../types/Images'
import Image from 'next/image'

type HomeContentProps = {
  images: Array<TImages>
}

const HomeContent = ({ images }: HomeContentProps) => {
  return (
    <div>
      {images.map((image) => (
        <Image
          src={image.download_url}
          alt={image.author}
          key={image.id}
          width={200}
          height={200}
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default HomeContent
