import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <footer className="footer">
      
      <div className="footer-box">
        <div className="footer-section">
          <h4 id='logo'>Logo </h4>
          <p className='colorlogo'>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.<br/> Scelerisque donec non pellentesque ut.</p>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <p className='colorabout'>product<br/> <br/> resource <br/> <br/> term & condition <br/> <br/>  FAQ </p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <p className='colorcompany'>Our Team <br/><br/> Partner With Us<br/><br/> Privacy & Policy<br/><br/>Features</p>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p className='colorcontact'>+216 27527767<br/><br/>wala.ess2002@gmail,com</p>
          <svg className='insta'  xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2812 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" fill="white" fill-opacity="0.5"/>
</svg>
<svg className='discord' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M16.075 11.875C16.075 12.6375 15.5125 13.2625 14.8 13.2625C14.1 13.2625 13.525 12.6375 13.525 11.875C13.525 11.1125 14.0875 10.4875 14.8 10.4875C15.5125 10.4875 16.075 11.1125 16.075 11.875ZM10.2375 10.4875C9.525 10.4875 8.9625 11.1125 8.9625 11.875C8.9625 12.6375 9.5375 13.2625 10.2375 13.2625C10.95 13.2625 11.5125 12.6375 11.5125 11.875C11.525 11.1125 10.95 10.4875 10.2375 10.4875ZM23.4375 2.575V25C20.2884 22.2171 21.2955 23.1383 17.6375 19.7375L18.3 22.05H4.125C2.7125 22.05 1.5625 20.9 1.5625 19.475V2.575C1.5625 1.15 2.7125 0 4.125 0H20.875C22.2875 0 23.4375 1.15 23.4375 2.575ZM19.875 14.425C19.875 10.4 18.075 7.1375 18.075 7.1375C16.275 5.7875 14.5625 5.825 14.5625 5.825L14.3875 6.025C16.5125 6.675 17.5 7.6125 17.5 7.6125C14.5307 5.98511 11.0428 5.98481 8.1625 7.25C7.7 7.4625 7.425 7.6125 7.425 7.6125C7.425 7.6125 8.4625 6.625 10.7125 5.975L10.5875 5.825C10.5875 5.825 8.875 5.7875 7.075 7.1375C7.075 7.1375 5.275 10.4 5.275 14.425C5.275 14.425 6.325 16.2375 9.0875 16.325C9.0875 16.325 9.55 15.7625 9.925 15.2875C8.3375 14.8125 7.7375 13.8125 7.7375 13.8125C7.92139 13.9412 8.22461 14.1081 8.25 14.125C10.3599 15.3065 13.3568 15.6937 16.05 14.5625C16.4875 14.4 16.975 14.1625 17.4875 13.825C17.4875 13.825 16.8625 14.85 15.225 15.3125C15.6 15.7875 16.05 16.325 16.05 16.325C18.8125 16.2375 19.875 14.425 19.875 14.425Z" fill="white" fill-opacity="0.5"/>
</svg>
<svg className='youtube' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
<path d="M23.8566 6.77452C23.584 5.74804 22.7808 4.93962 21.761 4.66527C19.9124 4.16675 12.5001 4.16675 12.5001 4.16675C12.5001 4.16675 5.08773 4.16675 3.23917 4.66527C2.21933 4.93966 1.41612 5.74804 1.14351 6.77452C0.648193 8.63506 0.648193 12.5169 0.648193 12.5169C0.648193 12.5169 0.648193 16.3988 1.14351 18.2593C1.41612 19.2858 2.21933 20.0605 3.23917 20.3349C5.08773 20.8334 12.5001 20.8334 12.5001 20.8334C12.5001 20.8334 19.9124 20.8334 21.761 20.3349C22.7808 20.0605 23.584 19.2858 23.8566 18.2593C24.3519 16.3988 24.3519 12.5169 24.3519 12.5169C24.3519 12.5169 24.3519 8.63506 23.8566 6.77452ZM10.0758 16.0414V8.99249L16.2711 12.517L10.0758 16.0414Z" fill="white" fill-opacity="0.5"/>
</svg>
          <svg className='insta' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M12.5049 6.88477C9.39941 6.88477 6.89453 9.38965 6.89453 12.4951C6.89453 15.6006 9.39941 18.1055 12.5049 18.1055C15.6104 18.1055 18.1152 15.6006 18.1152 12.4951C18.1152 9.38965 15.6104 6.88477 12.5049 6.88477ZM12.5049 16.1426C10.498 16.1426 8.85742 14.5068 8.85742 12.4951C8.85742 10.4834 10.4932 8.84766 12.5049 8.84766C14.5166 8.84766 16.1523 10.4834 16.1523 12.4951C16.1523 14.5068 14.5117 16.1426 12.5049 16.1426ZM19.6533 6.65527C19.6533 7.38281 19.0674 7.96387 18.3447 7.96387C17.6172 7.96387 17.0361 7.37793 17.0361 6.65527C17.0361 5.93262 17.6221 5.34668 18.3447 5.34668C19.0674 5.34668 19.6533 5.93262 19.6533 6.65527ZM23.3691 7.9834C23.2861 6.23047 22.8857 4.67773 21.6016 3.39844C20.3223 2.11914 18.7695 1.71875 17.0166 1.63086C15.21 1.52832 9.79492 1.52832 7.98828 1.63086C6.24023 1.71387 4.6875 2.11426 3.40332 3.39355C2.11914 4.67285 1.72363 6.22559 1.63574 7.97852C1.5332 9.78516 1.5332 15.2002 1.63574 17.0068C1.71875 18.7598 2.11914 20.3125 3.40332 21.5918C4.6875 22.8711 6.23535 23.2715 7.98828 23.3594C9.79492 23.4619 15.21 23.4619 17.0166 23.3594C18.7695 23.2764 20.3223 22.876 21.6016 21.5918C22.8809 20.3125 23.2812 18.7598 23.3691 17.0068C23.4717 15.2002 23.4717 9.79004 23.3691 7.9834ZM21.0352 18.9453C20.6543 19.9023 19.917 20.6396 18.9551 21.0254C17.5146 21.5967 14.0967 21.4648 12.5049 21.4648C10.9131 21.4648 7.49023 21.5918 6.05469 21.0254C5.09766 20.6445 4.36035 19.9072 3.97461 18.9453C3.40332 17.5049 3.53516 14.0869 3.53516 12.4951C3.53516 10.9033 3.4082 7.48047 3.97461 6.04492C4.35547 5.08789 5.09277 4.35059 6.05469 3.96484C7.49512 3.39355 10.9131 3.52539 12.5049 3.52539C14.0967 3.52539 17.5195 3.39844 18.9551 3.96484C19.9121 4.3457 20.6494 5.08301 21.0352 6.04492C21.6064 7.48535 21.4746 10.9033 21.4746 12.4951C21.4746 14.0869 21.6064 17.5098 21.0352 18.9453Z" fill="white" fill-opacity="0.5"/>
          </svg>
          <svg className='discord' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M16.075 11.875C16.075 12.6375 15.5125 13.2625 14.8 13.2625C14.1 13.2625 13.525 12.6375 13.525 11.875C13.525 11.1125 14.0875 10.4875 14.8 10.4875C15.5125 10.4875 16.075 11.1125 16.075 11.875ZM10.2375 10.4875C9.525 10.4875 8.9625 11.1125 8.9625 11.875C8.9625 12.6375 9.5375 13.2625 10.2375 13.2625C10.95 13.2625 11.5125 12.6375 11.5125 11.875C11.525 11.1125 10.95 10.4875 10.2375 10.4875ZM23.4375 2.575V25C20.2884 22.2171 21.2955 23.1383 17.6375 19.7375L18.3 22.05H4.125C2.7125 22.05 1.5625 20.9 1.5625 19.475V2.575C1.5625 1.15 2.7125 0 4.125 0H20.875C22.2875 0 23.4375 1.15 23.4375 2.575ZM19.875 14.425C19.875 10.4 18.075 7.1375 18.075 7.1375C16.275 5.7875 14.5625 5.825 14.5625 5.825L14.3875 6.025C16.5125 6.675 17.5 7.6125 17.5 7.6125C14.5307 5.98511 11.0428 5.98481 8.1625 7.25C7.7 7.4625 7.425 7.6125 7.425 7.6125C7.425 7.6125 8.4625 6.625 10.7125 5.975L10.5875 5.825C10.5875 5.825 8.875 5.7875 7.075 7.1375C7.075 7.1375 5.275 10.4 5.275 14.425C5.275 14.425 6.325 16.2375 9.0875 16.325C9.0875 16.325 9.55 15.7625 9.925 15.2875C8.3375 14.8125 7.7375 13.8125 7.7375 13.8125C7.92139 13.9412 8.22461 14.1081 8.25 14.125C10.3599 15.3065 13.3568 15.6937 16.05 14.5625C16.4875 14.4 16.975 14.1625 17.4875 13.825C17.4875 13.825 16.8625 14.85 15.225 15.3125C15.6 15.7875 16.05 16.325 16.05 16.325C18.8125 16.2375 19.875 14.425 19.875 14.425Z" fill="white" fill-opacity="0.5"/>
          </svg>
          <svg className='youtube' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <path d="M23.8566 6.77452C23.584 5.74804 22.7808 4.93962 21.761 4.66527C19.9124 4.16675 12.5001 4.16675 12.5001 4.16675C12.5001 4.16675 5.08773 4.16675 3.23917 4.66527C2.21933 4.93966 1.41612 5.74804 1.14351 6.77452C0.648193 8.63506 0.648193 12.5169 0.648193 12.5169C0.648193 12.5169 0.648193 16.3988 1.14351 18.2593C1.41612 19.2858 2.21933 20.0605 3.23917 20.3349C5.08773 20.8334 12.5001 20.8334 12.5001 20.8334C12.5001 20.8334 19.9124 20.8334 21.761 20.3349C22.7808 20.0605 23.584 19.2858 23.8566 18.2593C24.3519 16.3988 24.3519 12.5169 24.3519 12.5169C24.3519 12.5169 24.3519 8.63506 23.8566 6.77452ZM10.0758 16.0414V8.99249L16.2711 12.517L10.0758 16.0414Z" fill="white" fill-opacity="0.5"/>
          </svg>
        </div>
      </div>
    </footer>
      
    </div>
  )
}

export default Footer