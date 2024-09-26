---
layout: requirement
type: requirement
image: images/portfolio/evidence-of-scholarly-ability.jpg
title: Evidence of Scholarly Ability
# All dates must be YYYY-MM-DD format!
date: 2024-09-24
labels:
  - PhD Portfolio
---

*This page presents evidence of my scholarly ability in computer science as required for the [ICS Ph.D. Portfolio](https://philipmjohnson.org/essays/why-and-how-to-write-a-high-quality-phd-portfolio.html). This includes evidence of ability to identify, critically analyze, and research a problem, as well as written communication skills.*

### PhD Proposal

**Dynamic Zero Trust Network Architectures for Mobile and Satellite Communications Using Quantum-Resistant VPNs**

**Abstract**: This research will investigate the design and implementation of dynamic zero trust network architectures that leverage quantum-resistant VPNs for secure communication in mobile and satellite environments. The proposed architecture may use the QUIC protocol to ensure resilient and low-latency connections, even in high-latency or intermittent connectivity scenarios. The VPN framework may feature dynamic routing and access control policies based on real-time network conditions and user roles, enforced through a secure connector and relay system. The dissertation may evaluate the security and performance of this architecture in simulated mobile and satellite communication scenarios and explore its applicability to securing critical infrastructure networks in remote and high-risk environments.

**Key Areas**:
- Design of a dynamic zero trust network architecture using quantum-resistant VPNs for mobile and satellite communications.
- Security and performance evaluation of the architecture in simulated environments with variable connectivity.
- Development of dynamic routing and access control policies for secure and efficient communication.
- Analysis of the architecture's applicability to critical infrastructure and other high-risk environments.

Full Paper is in Development

### Literature Review(s)

**A Comprehensive Literature Review on the Security and Performance of QUIC Protocol for Dynamic Zero Trust Architectures in Mobile and Satellite Communications**

**Abstract**: This literature review explores the existing research on the QUIC protocol, focusing on its potential to support dynamic zero trust network architectures in mobile and satellite communications. The review covers a wide range of topics, including performance comparisons between TCP/IP and QUIC, post-quantum adaptations, and security challenges associated with QUIC in complex network environments. Key studies analyzed include performance evaluations in cloud networking and anonymity networks like Tor, multipath QUIC implementations, and the protocol's behavior in integrated satellite and terrestrial networks.

Current research highlights the advantages of QUIC in reducing latency and improving connection reliability, essential for environments with high-latency or intermittent connectivity. However, security vulnerabilities such as 0-RTT replay attacks and weaknesses in handshake mechanisms present significant challenges for its adoption in critical infrastructure networks. This review also examines recent advances in formal analysis and symbolic model checking of the QUIC handshake, providing insights into potential security improvements.

In parallel, an empirical study is being conducted using the Rust programming language and the quinn crate to capture and analyze QUIC network traffic, comparing these findings with formal models of the protocol's handshake. This practical analysis aims to identify gaps between theoretical security models and real-world implementations.

The outcomes of this literature review will inform the design of a quantum-resistant VPN framework that leverages the QUIC protocol for secure, resilient communication in mobile and satellite environments. By synthesizing current research and identifying areas for innovation, this review will lay the groundwork for developing a dynamic zero trust architecture capable of meeting the unique security and performance requirements of critical infrastructure in the Pacific region.

Full Paper is in Development

### MS Degree Thesis

**EXPLORING SECURITY VULNERABILITIES IN FHIR SERVER IMPLEMENTATIONS: A CASE STUDY ON IBM’S FHIR SERVER IN THE CONTEXT OF THE 21ST CENTURY CURES ACT**

**Abstract**: The 21st Century Cures Act, enacted in 2016, marked a pivotal shift in healthcare technology by mandating interoperability and patient access to health data. Central to this transformation is the utilization of Application Programming Interfaces (API), which play a critical role in the seamless exchange of health information. The Interoperability and Patient Access final rule, stemming from this Act, delineates a clear roadmap for healthcare data standards, with a particular emphasis on Health Level 7 (HL7) Fast Healthcare Interoperability Resources (FHIR) standards. This rule also introduces the consumer app API rule, designed to enhance data exchange among diverse health stakeholders. These advancements are instrumental in fostering interoperability and actively engaging patients in their healthcare journey.

This thesis examines the pressing need for robust security measures in the rapid implementation of FHIR servers, highlighted by the Act’s urgent compliance deadlines which may have inadvertently led to potential security compromises, with a particular emphasis on International Business Machines’ (IBM) FHIR Server. This research is anchored on three pivotal questions:

1. Identifying common security vulnerabilities i FHIR server implementations, specifically IBM’s FHIR Server, and understanding how these vulnerabilities vary across different deployment configurations and usage scenarios.
2. Recommending best practices for enhancing the security of IBM’s FHIR Server based on penetration testing outcomes, while addressing potential challenges in implementing these enhancements.
3. Assessing the impact of FHIR server security vulnerabilities on compliance with healthcare regulations such as Health Insurance Portability and Accountability Act (HIPAA) and General Data Protection Regulation (GDPR),and evaluating the role of penetration testing in ensuring regulatory compliance.

This investigation employs empirical security assessments to explore the vulnerabilities inherent in current FHIR server deployments and proposes a series of best practices to mitigate these issues. The findings highlight the critical need for incorporating robust security measures at the early stages of FHIR server implementation to safeguard patient data and comply with legal standards. By detailing the vulnerabilities and offering mitigation strategies, this thesis contributes to the ongoing discussion on securing digital health infrastructures and underscores the importance of rigorous security practices in the rapidly evolving healthcare technology landscape.

[Full Paper](ms_thesis.pdf)

### Technical Papers

**A Large-Scale Empirical Study on the Occurrence of Improperly Secured Application Programming Interfaces**

Craig Opie and Hangbo Zhang

**Abstract**: The intent of this paper is to conduct a large-scale empirical study on bug bounty reports related to API vulnerabilities and weaknesses. We aim to identify common critical and important API vulnerabilities discovered through the bug bounty process, using Microsoft’s security update severity rating system. Additionally, we have defined a method to determine the severity ranking of a vulnerability. Our findings are cross-validated with OWASP Top 10 to determine the change in occurrence of each vulnerability. Our research can help developers determine real-world vulnerabilities and weaknesses, assign severity to common API vulnerabilities, and validate OWASP Top 10 regarding API. Furthermore, our study can provide a pathway for researchers to study and address common vulnerabilities.

[Full Paper](improperly-secured-apis.pdf)
