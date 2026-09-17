import { useState } from 'react'
import logo from '../../assets/medpics-logo.png'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function alternarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <header className="border-b-2 border-[#d9d4c5] bg-[#fcfaf5] px-5 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#">
          <img src={logo} alt="Logo MedPics" className="max-h-[53px]" />
        </a>

        <button className="text-2xl md:hidden" onClick={alternarMenu}>
          ☰
        </button>

        <nav className={menuAberto ? 'block w-full md:block md:w-auto' : 'hidden md:block'}>
          <ul className="mt-4 flex flex-col items-start gap-2 md:mt-0 md:flex-row md:items-center">
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Cannabis Medicinal
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Para Quem É
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Programa Integrativo
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="inline-block px-3 py-2 font-medium text-black hover:text-[#6b7c5a]">
                Sobre a MedPics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block rounded-full bg-[#5f6f52] px-5 py-2 font-medium text-white hover:bg-[#4c5840]"
              >
                Cadastro/Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
