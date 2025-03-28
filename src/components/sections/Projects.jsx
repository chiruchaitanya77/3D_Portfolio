import React, { useState, useRef } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import { motion, useInView } from "framer-motion";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  padding: 60px 30px 100px 30px;
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

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) =>
    active &&
    `
  background:  ${theme.primary + 20};
  `}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  // Track when the container is 60% visible
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // Trigger animation at 40%

  return (
      <Container id="Projects">
        <Wrapper>
          <Title>Projects</Title>
          <Desc
              style={{
                marginBottom: "30px",
              }}
          >
            I have worked on few projects and currently building. Here are my completed projects.
          </Desc>

          <ToggleButtonGroup>
            <ToggleButton
                active={toggle === "all"}
                onClick={() => setToggle("all")}
            >
              ALL
            </ToggleButton>
            <Divider />
            <ToggleButton
                active={toggle === "web app"}
                onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
            <Divider />
            <ToggleButton
                active={toggle === "machine learning"}
                onClick={() => setToggle("machine learning")}
            >
              AI/ML/DL
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Animate the entire CardContainer when 60% in view */}
          <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }} // Initially hidden
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CardContainer>
              {toggle === "all" &&
                  projects.map((project) => (
                      <ProjectCard
                          key={project.id}
                          project={project}
                          openModal={openModal}
                          setOpenModal={setOpenModal}
                      />
                  ))}

              {projects
                  .filter((item) => item.category.includes(toggle))
                  .map((project) => (
                      <ProjectCard
                          key={project.id}
                          project={project}
                          openModal={openModal}
                          setOpenModal={setOpenModal}
                      />
                  ))}
            </CardContainer>
          </motion.div>
        </Wrapper>
      </Container>
  );
};

export default Projects;
