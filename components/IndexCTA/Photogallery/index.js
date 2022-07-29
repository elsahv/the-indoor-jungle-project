import Image from 'next/image'
import profilePic from '../../../public/images/aerogarden.jpg'
import plantpic1 from '../../../public/images/plant2.jpg'
import plantpic2 from '../../../public/images/plant3.jpg'
import plantpic3 from '../../../public/images/pothos.jpg'
import {
  Wrapper,
  Grid,
  Photo1,
  Photo2,
  Photo3,
  Photo4
} from "./Photogallery.styled"





const Photogallery = () => {
  return (
    <Wrapper>
       <Grid>
        <Photo1>
        <Image
         src={profilePic}
         alt="about-me"
         layout="fill"
          />
        </Photo1>


        <Photo2>
        <Image
         src={plantpic1}
         alt="photo"
         layout="fill"
         />
        </Photo2>


        <Photo3>
        <Image
         src={plantpic2}
         alt="photo"
         layout="fill"
          />
        </Photo3>

        <Photo4>
        <Image
         src={plantpic3}
         alt="photo"
         layout="fill"
          />

        </Photo4>

       </Grid> 
       </Wrapper>
  )
}

export default Photogallery