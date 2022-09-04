import React from "react";

import ResumeContext from "provider/ResumeContext";
import { Center, Section } from "component/layout";
import NameTitle from "./components/NameTitle";

function Home() {
  const { nameFirst, github, linkedin, email } =
    React.useContext(ResumeContext);
  const [pageHeight, setPageHeight] = React.useState(0);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      setPageHeight(window.innerHeight - 60); // Remove the pixel height of the header
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Section noPadding>
      <Center minHeight={`${pageHeight}px`}>
        <NameTitle
          name={nameFirst}
          github={github}
          linkedin={linkedin}
          email={email}
        />
      </Center>
    </Section>
  );
}

export default Home;
