import styled from 'styled-components'


 



export const SubscribeContainer = styled.div`
width: 100%;
padding: 10px 10px 10px 20px;
  // border: 2px solid black;
  // background: #2d6a4f;

   
@media only screen and (max-width: 600px) {
margin: 20px;
}
`
 

export const SubFormContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
  .form-input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    @media (max-width: 531px) {
      display: block;    }
  }
  .form-input input {
    // width: 100%;
    background-color: #f9fafb;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4px;
    border: 1px solid #6a4feb2e;
    font-size: 16px;
    @media (max-width: 531px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .sub-form-btn {
    margin-left: 10px;
    margin-right: 5px;

    .form-btn {
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      padding-left: 1.2rem;
      padding-right: 1.2rem;
      border: none;
      border-radius: 4px;
      font-weight: bold;
      background: #7f5bd5b0;
      color: #ff0;
      cursor: pointer;
      /* :disabled {
        background: #636262;
    color: #cbced0;
      } */
      :disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
    @media (max-width: 600px) {
      margin-top: 10px;
      margin-left: 0;
    }
  } 
`
export const SuccessState = styled.p`
  color: aquamarine;
  padding-top: 20px;
`
export const ErrorState = styled.p`
  color: #b00020;
  padding-top: 22px;
`



 