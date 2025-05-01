import React from "react";
import styled from "styled-components";
import { FaPhoneAlt, FaHome } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  padding: 40px;
  background: linear-gradient(135deg, ${({ theme }) => theme.bgLight}, ${({ theme }) => theme.bgDark});
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Quote = styled.p`
  margin-top: 30px;
  font-style: italic;
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

function Contact() {
  return (
    <Container>
      <Title>Get In Touch</Title>
      <Subtitle>Owner & Founder: Harsh Asati</Subtitle>

      <Info>
        <FaPhoneAlt /> 9174645951
      </Info>

      <Info>
        <FaHome />
        Asati Bhawan, House No. 90, Ward No. 27, Sahodra Bai Rai Ward, Khurai - 470117
      </Info>

      <Quote>"Building dreams, one connection at a time."</Quote>
    </Container>
  );
}

export default Contact;
