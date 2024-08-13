import LogoAthletico from '../../assets/escudo-athletico.svg'

export function HeaderLogo() {
  return (
    <a href="/">
      <img src={LogoAthletico} alt="Athlético" className="w-14" />
    </a>
  )
}
