import '../styles/components/informationContainer.sass'

import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const InformationContainer = () => {
  return (
    <section id='information'>
      <div className="info-card">
        <AiFillPhone id='phone-icon' />
        <div>
          <h3>Celular</h3>
          <p>(74)99945-6227</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id='email-icon' />
        <div>
          <h3>Email</h3>
          <p>adriano_alves_2008@hotmail.com</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id='pin-icon' />
        <div>
          <h3>Localização</h3>
          <p>Feira de Santana - Bahia</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer