import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ImageInterface } from '../types/Images'
import Head from 'next/head'
import Header from '../components/common/Header'
import ImagesList from '../components/home/ImagesList'
import { getAllImages } from '../utils/photos'

export const getStaticProps: GetStaticProps = async () => {
  const imagesData: ImageInterface[] = getAllImages()

  return {
    props: {
      images: imagesData,
    },
  }
}

type HomeProps = {
  images: ImageInterface[]
}

const Home: NextPage = ({
  images,
}: HomeProps | InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <main>
      <Head>
        <title>NextGalleria | by mrLuisFer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ImagesList images={images} />
    </main>
  )
}
export default Home
