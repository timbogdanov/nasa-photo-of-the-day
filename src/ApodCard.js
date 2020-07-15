import React from 'react'
import styled from 'styled-components'

const CardCenter = styled.div`
  display: grid;
  height: 100vh;
  margin: 0;
  place-items: center center;
`;

const Card = styled.div`
  width: 700px;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Copyright = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 35px;
  padding: 8px 15px;
  background: rgba(0,0,0, 0.4);
  border-radius: 1px;
  color: white;
  font-size: 1.1rem;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const CardInfo = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ApodCard = ({ info }) => (
  <CardCenter>
    <Card>
      <ImageContainer>
        <Image alt="" src={info.hdurl}></Image>
        <Copyright>{info.copyright}</Copyright>
      </ImageContainer>

      <CardInfo>
        <h1>{info.title}</h1>
        <p>{info.explanation}</p>
        <p>Date: {info.date}</p>
      </CardInfo>
    </Card>
  </CardCenter>
)

export default ApodCard;