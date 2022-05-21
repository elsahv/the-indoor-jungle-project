import React from 'react';
// import SelfImg from "./images/portfolio-pic.jpg"; 
import Image from 'next/image'
  
import {
  ContactSection,
  ContactInfo,
  ImageSection,
} from './styles/BusinessCard.styled'

  
export default function BusinessCard() {
    return(
        <ContactSection>
            <ImageSection>
            <Image
             src="/images/portfolio-pic.jpg"  
             width="950"
             height="1528"
             className="img"
             />
            </ImageSection>

        <ContactInfo>
            <h4>Contact</h4>
            <p>Hi there, Im Elsa. Im a web developer who really loves food. I also like weightlifting... but were just friends!</p>
              sm
              <div className="contact-list">elsahvy@gmail.com
               elsahovey.com
              </div>
        </ContactInfo>
      </ContactSection>

    )
}