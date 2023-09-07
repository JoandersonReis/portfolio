import { Container } from './Container'

const Banner = () => {
  return (
    <Container.Root
      className="bg-banner-universe bg-top bg-fixed bg-contain bg-no-repeat md:bg-cover"
      id="banner"
    >
      <Container.Overlay>
        <Container.Content className="py-20 md:h-[800px] flex items-center justify-center">
          <h1 className="text-4xl md:text-center lg:text-7xl">
            OLÁ ME CHAMO JOANDERSON. SOU DESENVOLVEDOR FULL STACK COM 2 ANOS DE
            EXPERIÊNCIA. TENHO PROEFICÊNCIA PRINCIPALMENTE EM{' '}
            <strong className="text-sky-500">NODE.JS</strong>,{' '}
            <strong className="text-sky-500">REACT</strong>,
            <strong className="text-sky-500">TYPESCRIPT</strong> E{' '}
            <strong className="text-sky-500">NEXT</strong>.
          </h1>
        </Container.Content>
      </Container.Overlay>
    </Container.Root>
  )
}

export default Banner
