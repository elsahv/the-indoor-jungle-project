import Image from 'next/image'
import profilePic from '../../public/images/about-img.jpg'
import plantpic1 from '../../public/images/plant1.jpg'
import plantpic2 from '../../public/images/plant2.jpg'
import plantpic3 from '../../public/images/plant6.jpg'
import {
  PhotosSection,
  Photo1,
  Photo2,
  Photo3,
  Photo4
} from "./Photogallery.styled"





const Photogallery = () => {
  return (
       <PhotosSection>

        <Photo1>
        <Image
         src={profilePic}
         alt="about-me"
         layout="responsive"
          />
        </Photo1>


        <Photo2>
        <Image
         src={plantpic1}
         alt="photo"
         layout="responsive"
         width={130}
         height={100}
         />
        </Photo2>


        <Photo3>
        <Image
         src={plantpic2}
         alt="photo"
         layout="responsive"
         width={130}
         height={100}
          />
        </Photo3>

        <Photo4>
        <Image
         src={plantpic3}
         alt="photo"
         layout="responsive"
         width={130}
         height={100}
          />

        </Photo4>

       </PhotosSection> 
  )
}

export default Photogallery