import Image from "next/image";
// import resume from "../public/CV-KDiana.pdf";
import profileImage from "../public/images/profile.png";
import financeTracker from "../public/images/project-finance-tracker.png";
import storeApp from "../public/images/project-storeapp.png";
import airlineApp from "../public/images/project-airline-app.png";
import cvapp from "../public/images/project-cvapp.png";
import github from "../public/images/github.png";
import linkedin from "../public/images/linkedin.png";
import email from "../public/images/email.png";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Container sx={{ width: { xs: "100rem" } }}>
        {/* Top */}
        <Box
          sx={{ textAlign: "center", marginTop: "5rem" }}
          className="section"
        >
          <p className="text">Hello, I'm</p>
          <p className="text-heading">Diana</p>
          <p className="text" style={{ fontSize: "xxx-large" }}>
            Junior Frontend Developer
          </p>
          <Box>
            <Link href="/CV-KDiana.pdf">
              <Button className="btn">Download CV</Button>
            </Link>
            <Link type="button" href="/#contact">
              <Button className="btn">Contact</Button>
            </Link>
          </Box>
        </Box>
        {/* About Me */}
        <Box id="about" className="section">
          <p className="text">Get to Know More</p>
          <p className="text-heading">About Me</p>
          <Box
            sx={{ display: { xs: "blocke", md: "flex" }, marginTop: "100px" }}
          >
            <Box>
              <Image
                src={profileImage}
                alt="Profile picture"
                width={350}
                height={400}
                style={{ borderRadius: "50px", marginRight: "20px" }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: "80%", md: "100%" },
                margin: "0 auto",
              }}
            >
              <p className="text">Education</p>
              <p>
                Coding Factory - Athens University of Economics and Business
              </p>{" "}
              <p>Oct 2023 - Jun 2024</p>
              <p>
                Hospitality and Tourism Management - Advanced School of Tourim
                Education of Rhodes
              </p>
              <p>Oct 2017 - Jun 2021</p>
              <p className="text">Background</p>
              <p>
                I have a degree in Hospitality and Tourism Management, which has
                given me the chance to travel and work abroad. In one of my
                previous jobs, I discovered my true passion for coding. I
                participated in a junior full stack bootcamp, and now I am
                actively seeking opportunities to expand my knowledge and grow
                in this exciting field.v
              </p>
            </Box>
          </Box>
        </Box>
        {/* Experience */}
        <Box id="experience" className="section" sx={{ textAlign: "center" }}>
          <p className="text">Explore My</p>
          <p className="text-heading">Experience</p>
          <Box
            sx={{
              width: {
                xs: "50%",
                md: "100%",
              },
              margin: {
                xs: "0 auto",
              },
              display: {
                xs: "block",
                md: "flex",
              },
              justifyContent: "space-evenly",
              padding: "2rem",
            }}
          >
            <Box className="experience-details">
              <p className="text">Frontend Development</p>
              <p className="text-exp-details">HTML</p>
              <p className="text-exp-details">CSS</p>
              <p className="text-exp-details">JavaScript</p>
              <p className="text-exp-details">React</p>
              <p className="text-exp-details">Next.js</p>
              <p className="text-exp-details">Angular</p>
              <p className="text-exp-details">Material UI</p>
              <p className="text-exp-details">Bootstrap</p>
              <p className="text-exp-details">jQuery</p>
            </Box>
            <Box className="experience-details">
              <p className="text">Backend Development</p>
              <p className="text-exp-details">Node.js</p>
              <p className="text-exp-details">Express.js</p>
              <p className="text-exp-details">Java</p>
              <p className="text-exp-details">MongoDB</p>
              <p className="text-exp-details">MySQL</p>
              <p className="text-exp-details">SQL</p>
            </Box>
          </Box>
        </Box>
        {/* Projects */}
        <Box
          id="projects"
          className="section"
          sx={{
            textAlign: "center",
          }}
        >
          <p className="text-heading">Projects</p>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Box
              className="project-box"
              sx={{
                width: {
                  xs: "50%",
                  md: "40%",
                },
              }}
            >
              <Image
                src={financeTracker}
                alt="Project Finance Tracker"
                width={400}
                height={450}
                style={{ borderRadius: "50px" }}
              />
              <p className="text">Finance Tracker</p>
              <p>Next.js/ Node.js / MongoDB</p>
              <Link href="https://github.com/dianakps/Finance-Tracker">
                <Button className="btn">Github</Button>
              </Link>
            </Box>
            <Box
              className="project-box"
              sx={{
                width: {
                  xs: "50%",
                  md: "40%",
                },
              }}
            >
              <Image
                src={storeApp}
                alt="Project Store App"
                width={400}
                height={450}
                style={{ borderRadius: "50px" }}
              />
              <p className="text">Store Application</p>
              <p>React.js/Material UI/ Node.js</p>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link href="https://github.com/dianakps/StoreApp">
                  <Button className="btn">Github</Button>
                </Link>
                <Link href="https://dianakps.github.io/StoreApp/">
                  <Button className="btn">Live Demo</Button>
                </Link>
              </Box>
            </Box>
            <Box
              className="project-box"
              sx={{
                width: {
                  xs: "50%",
                  md: "40%",
                },
              }}
            >
              <Image
                src={airlineApp}
                alt="Project Airline App"
                width={400}
                height={450}
                style={{ borderRadius: "50px" }}
              />
              <p className="text">Airline Application</p>
              <p>HTML/ CSS/ JavaScript</p>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link href="https://github.com/dianakps/Airline-App">
                  <Button className="btn">Github</Button>
                </Link>
                <Link href="https://dianakps.github.io/Airline-App/">
                  <Button className="btn">Live Demo</Button>
                </Link>
              </Box>
            </Box>
            <Box
              className="project-box"
              sx={{
                width: {
                  xs: "50%",
                  md: "40%",
                },
              }}
            >
              <Image
                src={cvapp}
                alt="Project CV Generator"
                width={400}
                height={450}
                style={{ borderRadius: "50px" }}
              />
              <p className="text">CV Generator</p>
              <p>Angular/ Node.js/ MongoDB</p>
              <Link href="https://github.com/dianakps/cv-app">
                <Button className="btn">Github</Button>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* Contact */}
        <Box id="contact" className="section">
          <p className="text">Have a question or a proposal?</p>
          <p className="text-heading">Let’s Connect!</p>
          <Box
            sx={{
              width: "50%",
              mx: "auto",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link href="https://www.linkedin.com/in/dkoropetska/">
              <Image
                className="icon"
                src={linkedin}
                alt="Linkedin"
                width={45}
                height={45}
              />
            </Link>
            <Link href="https://github.com/dianakps">
              <Image
                className="icon"
                src={github}
                alt="Github"
                width={45}
                height={45}
              />
            </Link>
            <a href="mailto:dianakps@live.com?subject=Hey%20Diana!%20:D">
              <Image
                className="icon"
                src={email}
                alt="Email"
                width={50}
                height={50}
              />
            </a>
          </Box>
        </Box>
      </Container>
    </>
  );
}
