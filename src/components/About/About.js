import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import CodeIcon from '@material-ui/icons/Code'
import TelegramIcon from '@material-ui/icons/Telegram'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
            
            {social.email && (
              <a
                href={social.email}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}

            {social.telegram && (
              <a
                href={social.telegram}
                aria-label='telegram'
                className='link link--icon'
              >
                <TelegramIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.codecademy && (
              <a
                href={social.codecademy}
                aria-label='codecademy'
                className='link link--icon'
              >
                <CodeIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
