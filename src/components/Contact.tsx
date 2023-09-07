import { Mail } from 'lucide-react'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { Container } from './Container'
import SocialContact from './SocialContact'

const Contact = () => {
  return (
    <Container.Root
      className="bg-contact-background bg-fixed h-[400px] bg-cover bg-bottom lg:h-[800px] "
      id="contact"
    >
      <Container.Overlay gradient="top">
        <Container.Content className="flex flex-col items-center w-full">
          <div className="flex items-center justify-center bg-profile-background bg-contain bg-center bg-no-repeat py-10 w-full">
            <Image
              src="/assets/images/profile.svg"
              alt="Joanderson Reis"
              width={150}
              height={150}
            />
          </div>

          <p className="text-xl text-center max-w-sm">
            “O conhecimento é infinito igual ao universo, e o ser humano tem
            fases igual a lua.”
          </p>

          <div className="flex gap-3 w-full justify-center mt-4">
            <SocialContact
              target="_blank"
              href="https://github.com/JoandersonReis"
              icon={FaGithub}
            />

            <SocialContact
              target="_blank"
              href="https://www.linkedin.com/in/joanderson-reis-566365182"
              icon={FaLinkedinIn}
            />

            <SocialContact
              target="_blank"
              href="https://wa.me/5574999269460"
              icon={FaWhatsapp}
            />

            <SocialContact
              target="_blank"
              href="mailto:joandersonreis470@gmail.com"
              icon={Mail}
            />
          </div>
        </Container.Content>
      </Container.Overlay>
    </Container.Root>
  )
}

export default Contact
