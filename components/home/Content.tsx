import type { TImages } from '../../types/Images'

type HomeContentProps = {
  images: Array<TImages>
}

const HomeContent = ({ images }: HomeContentProps) => {
  return (
    <div>
      <p>content</p>
    </div>
  )
}

export default HomeContent
