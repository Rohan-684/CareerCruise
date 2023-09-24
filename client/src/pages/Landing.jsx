import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import main1 from '../assets/images/main-alternative.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Streamline your job hunt with CareerCruise, the ultimate job
            application tracking tool. Easily manage and organize your job
            applications and follow-ups. Stay on top of your career goals with
            insightful analytics. Whether you're actively seeking new
            opportunities or managing a high-volume job search,CareerCruise is
            your dedicated companion for landing your dream job.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main1} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
