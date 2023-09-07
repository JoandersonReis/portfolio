'use client'

import useHeaderNavigation from '@/hooks/useHeaderNavigation'
import { useEffect } from 'react'
import { FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'
import { Header } from './Header/index'

const HeaderComponent = () => {
  const { isVisible, toggleVisible, setScrollY, scrollY } =
    useHeaderNavigation()

  const navigationItems = [
    { href: '#banner', label: 'ínicio' },
    { href: '#projects', label: 'projetos' },
    { href: '#skills', label: 'habilidades' },
    { href: '#experiences', label: 'experiência' },
    { href: '#contact', label: 'contato' }
  ]

  const socialMedias = [
    {
      icon: <FaGithub size={18} color="#fff" />,
      link: 'https://github.com/JoandersonReis'
    },
    {
      icon: <FaLinkedinIn size={18} color="#fff" />,
      link: 'https://www.linkedin.com/in/joanderson-reis-566365182'
    }
  ]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window.pageYOffset)
    })
  }, [])

  return (
    <Header.Root
      className={twMerge(
        'bg-black/50 fixed w-screen z-50 transition-colors',
        scrollY > 720 && 'bg-zinc-950'
      )}
    >
      <Header.Content className="py-4 flex items-center justify-between">
        <Header.ToggleButton
          onClick={toggleVisible}
          className="bg-sky-500 h-8 w-8 rounded-sm flex items-center justify-center"
        >
          <FaBars size={22} color="#fff" />
        </Header.ToggleButton>

        <Header.Navigation
          isVisible={isVisible}
          className="fixed h-screen w-[250px] top-0 left-0 flex flex-col px-4 py-4 items-center gap-3 bg-gradient-to-br from-sky-500 to-sky-900 md:bg-gradient-r md:from-transparent md:relative md:flex-row md:h-5 md:flex-1 md:justify-center md:gap-6"
        >
          <Header.ToggleButton
            onClick={toggleVisible}
            className="h-8 w-8 rounded-sm flex items-center justify-center"
          >
            <FiX size={22} color="#fff" />
          </Header.ToggleButton>

          {navigationItems.map((navigationItem) => (
            <Header.NavigationItem
              href={navigationItem.href}
              key={navigationItem.href}
              className="uppercase text-lg py-2 hover:text-sky-600 transition-colors"
            >
              {navigationItem.label}
            </Header.NavigationItem>
          ))}
        </Header.Navigation>

        <Header.Navigation isVisible>
          <div className="flex gap-1">
            {socialMedias.map((social) => (
              <Header.NavigationItem
                key={social.link}
                href={social.link}
                className="h-8 w-8 bg-gradient-to-r from-sky-500 to-sky-900 rounded-full flex items-center justify-center transition-colors"
              >
                {social.icon}
              </Header.NavigationItem>
            ))}
          </div>

          {/* Language Selector Here */}
        </Header.Navigation>
      </Header.Content>
    </Header.Root>
  )
}

export default HeaderComponent
