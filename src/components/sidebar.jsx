import Avatar from '../img/avatar.jpg'
import "../styles/components/sidebar.sass"
import InformationContainer from './InformationContainer'
import SocialNetworks from './socialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Adriano Alves" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Download currículo</a>
    </aside>
  )
}

export default Sidebar