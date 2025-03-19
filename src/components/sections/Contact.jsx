import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`  
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ sent }) => (sent ? "green" : "hsla(271, 100%, 50%, 1)")};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  // opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  
  /* Hover effect */
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: ${({ sent, disabled }) =>
    disabled ? "" : sent ? "darkgreen" : "hsla(271, 100%, 60%, 1)"};
    transform: scale(1.05);
  }

  /* Click effect */
  &:active {
    transform: scale(0.95);
  }

  /* Text and icon styling */
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: ${({ sent }) => (sent ? '"✔"' : '""')};  /* Show checkmark if sent */
    margin-right: 8px;
    font-size: 20px;
  }
`;

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);  // State to disable the button

  const handelSubmit = async (e) => {
    e.preventDefault();
    setSent(true);  // Set the button state to 'sent'
    setIsDisabled(true);  // Disable the button during submission

    console.log("Form submitted");

    emailjs
        .sendForm(
            "service_gymc422", // EmailJS service ID
            "template_adrw5rr", // EmailJS template ID
            form.current, // Form reference
            "XzaK1mx3iYusQomMO" // EmailJS user ID
        )
        .then(
            (result) => {
              setTimeout(() => {
                setSent(false); // Revert to 'send' button after 2 seconds
                setIsDisabled(false);  // Enable the button after submission
                alert("Message Sent");
                form.current.reset(); // Reset the form after successful submission
              }, 2000); // Wait for 2 seconds before reverting
            },
            (error) => {
              alert("Error: " + error.text);  // Display the error message
              setSent(false);  // Revert to 'send' state in case of an error
              setIsDisabled(false);  // Enable the button if there's an error
            }
        );
  };

  return (
      <Container id="Contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc
              style={{
                marginBottom: "40px",
              }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
          <ContactForm onSubmit={handelSubmit} ref={form}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput
                placeholder="Your Email"
                name="from_email"
                type="email"
                required
            />
            <ContactInput
                placeholder="Your Name"
                name="from_name"
                type="text"
                required
            />
            <ContactInput
                placeholder="Subject"
                name="subject"
                type="text"
                required
            />
            <ContactInputMessage
                placeholder="Message"
                name="message"
                rows={4}
                required
            />
            <ContactButton type="submit" sent={sent} disabled={isDisabled}>
              {sent ? "Sent" : "Send"}
            </ContactButton>
          </ContactForm>
        </Wrapper>
      </Container>
  );
};

export default Contact;
