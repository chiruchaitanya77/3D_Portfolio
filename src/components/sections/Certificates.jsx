// import React from "react";
// import styled, { keyframes, css } from "styled-components";
// import { certificates } from "../../data/constants";
//
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//     padding: 60px 30px 0 30px;
//   z-index: 1;
//   align-items: center;
// `;
//
// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1100px;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;
// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;
// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;
//
// const floatAnimation = keyframes`
//     from {
//         transform: translateY(0);
//     }
//     to {
//         transform: translateY(-10px);
//     }
// `;
//
// const CertificateContainer = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     justify-content: center;
//     align-items: center;
//     gap: 40px;
//     padding: 20px;
// `;
//
// const CertificateCard = styled.div`
//     border-radius: 12px;
//     //box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//     box-shadow: rgba(23, 92, 230, 0.3) 0 4px 24px;
//     background-color: rgba(17, 25, 40, 0.83);
//     overflow: hidden;
//     text-align: center;
//     padding: 10px;
//     ${({ duration }) => css`
//     animation: ${floatAnimation} ${duration}s infinite ease-in-out alternate;
//   `}
// `;
//
// const CertificateImage = styled.img`
//     width: 100%;
//     height: auto;
//     border-radius: 8px;
// `;
//
// const CertificateTitle = styled.p`
//     font-weight: 600;
//     color: #f0f0f0;
// `;
//
// // const certificates = [
// //     { id: 1, img: "/images/cert1.png", title: "Certificate 1", duration: 1 },
// //     { id: 2, img: "/images/cert2.png", title: "Certificate 2", duration: 1.5 },
// //     { id: 3, img: "/images/cert3.png", title: "Certificate 3", duration: 1 },
// //     { id: 4, img: "/images/cert4.png", title: "Certificate 4", duration: 1.5 },
// //     { id: 5, img: "/images/cert5.png", title: "Certificate 5", duration: 1.5 },
// //     { id: 6, img: "/images/cert6.png", title: "Certificate 6", duration: 1 },
// // ];
//
// const Certificates = () => {
//     return (
//         <Container id="Certificates">
//             <Wrapper>
//                 <Title>Certifications</Title>
//                 <Desc style={{ marginBottom: "40px", }}>
//                     Here are some of my certifications on which I have earned as of now.
//                 </Desc>
//                 <CertificateContainer>
//                     {certificates.map((cert) => (
//                         <CertificateCard key={cert.id} duration={cert.duration}>
//                             <CertificateImage src={cert.image} alt={cert.title} />
//                             <CertificateTitle>{cert.title}</CertificateTitle>
//                         </CertificateCard>
//                     ))}
//                 </CertificateContainer>
//             </Wrapper>
//         </Container>
//     );
// };
//
// export default Certificates;

import React from "react";
import styled, { keyframes } from "styled-components";
import { certificates } from "../../data/constants";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 60px 30px 0 30px;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    overflow: hidden;
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

const scrollAnimation = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-50% - 20px));  /* Move half the total duplicated content */
    }
`;

const Scroller = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding-block: 15px;
    position: relative;
    -webkit-mask: linear-gradient(90deg, transparent, black 30%, white 70%, transparent);
    mask: linear-gradient(90deg, transparent, black 30%, white 70%, transparent);
`;

const CertificateContainer = styled.div`
    display: flex;
    gap: 40px;
    width: max-content; /* Ensures continuous flow */
    align-items: center;
    animation: ${scrollAnimation} 30s linear infinite; /* Slow down the scroll */
    //&:hover {
    //    animation-play-state: paused;
    //}
`;

const CertificateCard = styled.div`
    min-width: 300px;
    margin: 0 10px;
    border-radius: 12px;
    box-shadow: rgba(23, 192, 230, 0.3) 0 4px 28px;
    background-color: rgba(17, 25, 40, 0.83);
    overflow: hidden;
    text-align: center;
    padding: 10px;
`;

const CertificateImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
`;

const CertificateTitle = styled.p`
    font-weight: 600;
    color: #f0f0f0;
`;

const Certificates = () => {
    // Duplicate certificates to enable infinite looping
    const duplicatedCertificates = [...certificates, ...certificates, ...certificates, ...certificates];

    return (
        <Container id="Certificates">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc style={{ marginBottom: "40px" }}>
                    Here are some of my certifications which I have earned as of now.
                </Desc>
            </Wrapper>

            <Scroller>
                <CertificateContainer>
                    {duplicatedCertificates.map((cert, index) => (
                        <CertificateCard key={index}>
                            <CertificateImage src={cert.image} alt={cert.title} />
                            <CertificateTitle>{cert.title}</CertificateTitle>
                        </CertificateCard>
                    ))}
                </CertificateContainer>
            </Scroller>
        </Container>
    );
};

export default Certificates;
