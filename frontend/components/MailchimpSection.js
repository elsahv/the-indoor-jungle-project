
import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import styled from 'styled-components'


//STYLES
const FormStyles = styled.div`
padding: 15px;
width: 370px;
height: 210px;
button {
  margin-left: 10px;
  background: teal;
  width: 60px;
  border: solid 1px black;
  cursor: pointer;
  padding: 5px;
}
input {
  height: 30px;
  width: 210px;
  font-size: 16px;
  padding-left: 10px;
  border: solid 1px black;
}
h2{
  font-size: 23px;
  font-weight: 900;
  margin: 0 0 5px 0;
  padding-top: 35px;
  color: #fff;
  text-shadow: 2px 2px 2px #000;
}
@media only screen and (max-width: 1024px) {
  width: 200px;
   

}

`

//END STYLES





const url = `https://writintobetterhealth.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomMailchimpForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <FormStyles>
        <h2>Subscribe for post updates!!</h2>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "white" }}>Subscribed !</div>}
      </FormStyles>
    )}
  />
)
export default CustomMailchimpForm