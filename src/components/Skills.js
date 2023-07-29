import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <Container>
      <SkillsContainer>
        <SectionTitle>Personal Skills</SectionTitle>
        <SkillList>
          <SkillItem>Time Management - Advanced</SkillItem>
          <SkillItem>Communication - Advanced</SkillItem>
          <SkillItem>Creativity - Advanced</SkillItem>
          <SkillItem>Teamwork - Advanced</SkillItem>
          <SkillItem>Curiosity - Advanced</SkillItem>

        </SkillList>
      </SkillsContainer>
      <Separator />
      <SkillsContainer>
        <SectionTitle>Computer Skills</SectionTitle>
        <SkillList>
          <SkillItem>Microsoft Word - Advanced</SkillItem>
          <SkillItem>Microsoft Excel - Advanced</SkillItem>
          <SkillItem>Microsoft PowerPoint - Advanced</SkillItem>
          <SkillItem>Canva - Advanced</SkillItem>
          <SkillItem>Google Drive,Docs,Gmail - Advanced</SkillItem>

        </SkillList>
      </SkillsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 0px;
  min-height: 100vh;
  border-bottom: 3px solid black;

  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 8px;
    min-height: 80vh;

  }
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 20px;
  text-align: center;
`;

const Separator = styled.div`
  width: 3px;
  height: 100%;
  background-color: #000;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 24px;


  }
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;


  }
  margin-bottom: 10px;
`;

export default Skills;
