import React from 'react'
import "./estilos.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
    let whatsapp = `https://wa.me/2281460124`;

    return (
        <div class='row contFooter'>
                <div class="col-10 footCen">
                        <span className='titulosMed'>Desarrollo Web:</span>
                        <span className='titulosMed'>Marcos Forastiere</span>
                        <span className='titulosMed'>Full Stack Developer</span>                    
                </div>
                
                <div class="col-2 footDer">
                    <a href="https://www.instagram.com/fmarcos_casla/">
                        <InstagramIcon className="insta"/>
                    </a>
                    <a href={whatsapp}>
                        <WhatsAppIcon className="whats"/>
                    </a>                  
                        
                </div>
            
        </div>
    )
}

export default Footer