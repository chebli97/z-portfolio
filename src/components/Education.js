import React from 'react';
import styled from 'styled-components';
import girl from "../images/girl (2).png";
import books from "../images/books.png";

const Education = () => {
  return (
    <Container>
      <Row>
        <ImageContainer>
          <img src={girl} alt="" />
        </ImageContainer>
        <Separator />
        <WorkContainer>
          <SectionTitle>Work Experience</SectionTitle>
          <WorkItem>
            <WorkTitle>Agricultural Engineer</WorkTitle>
            <WorkCompany>SmartFarm</WorkCompany>
            <WorkDate>October 2022 - May 2023</WorkDate>
            {/* <WorkDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et nunc vel justo elementum fermentum a a nulla.
            </WorkDescription> */}
          </WorkItem>
          <WorkItem>
            <WorkTitle>Internship</WorkTitle>
            <WorkCompany>TANGARIS</WorkCompany>
            <WorkDate>Jan 2022 - June 2022</WorkDate>
            {/* <WorkDescription>
            Development of a technique for propagation of caper by cuttings.
                        </WorkDescription> */}
          </WorkItem>
        </WorkContainer>
      </Row>
      <Row>
        <EducationContainer>
          <SectionTitle>Education</SectionTitle>
          <EducationItem>
            <EducationTitle>Engineering degree, Plant Production Sciences</EducationTitle>
            <EducationInstitute>National Agronomic Institute of Tunisia </EducationInstitute>
            <EducationDate>2019 -2022</EducationDate>
          </EducationItem>
          <EducationItem>
            <EducationTitle>Biology and geology </EducationTitle>
            <EducationInstitute>Higher Institute of Preparatory Studies in Biology and Geology of La Soukra</EducationInstitute>
            <EducationDate>2017 - 2019</EducationDate>
          </EducationItem>
        </EducationContainer>
        <Separator />
        <ImageContainer>
          <img src={books} alt="" />
        </ImageContainer>
      </Row>
    </Container>
  );
};

const Container = styled.div`
    border-top: 3px solid black;
  display: grid;
  gap: 5px;
  padding: 0px;
  min-height: 90vh;
  
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;

  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  align-items: center;
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  img{
    @media (max-width: 768px) {
      width:200px;
    }

  }
`;

const SectionTitle = styled.h2`
    text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const WorkContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;
`;

const Separator = styled.div`

  width: 3px;
  height: 100%;
  background-color: #000;
`;

const EducationContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 10px;

`;

const WorkItem = styled.div`
  background-color: transparent;
  border-radius: 15px;
  box-shadow :5px 5px 7px 1px #1e1d1d;
  padding: 20px;
  @media (max-width: 768px) {
    text-align: center;
   padding: 12px;
      
  }
`;

const EducationItem = styled.div`
  background-color: transparent;
  border-radius: 15px;
  box-shadow :5px 5px 7px 1px #1e1d1d;
  padding: 20px;
  @media (max-width: 768px) {
    text-align: center;
   padding: 12px;
  }
`;

const WorkTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
`;

const WorkCompany = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
`;

const WorkDate = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const WorkDescription = styled.p`
  font-size: 14px;
`;

const EducationTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 12px;
  }
`;

const EducationInstitute = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 11px;
  }
`;

const EducationDate = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 5px;
`;

export default Education;
