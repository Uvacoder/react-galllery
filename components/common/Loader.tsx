import { ImageLoader, ImageLoaderProps } from 'next/image'
import loaderStyles from '../../styles/Loader.module.css'

const Loader = (): JSX.Element => {
  return <div className={loaderStyles.loader}></div>
}

export default Loader
