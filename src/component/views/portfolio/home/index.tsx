import React from "react";

import ResumeContext from "provider/portfolio/ResumeContext";
import { Center, Section } from "component/layout";
import NameTitle from "./components/NameTitle";

function Home() {
  const { nameFull, github, linkedin, email } = React.useContext(ResumeContext);
  const [pageHeight, setPageHeight] = React.useState(0);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      setPageHeight(window.innerHeight);
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Section noPadding>
      <Center minHeight={`${pageHeight}px`}>
        <NameTitle
          name={nameFull}
          github={github}
          linkedin={linkedin}
          email={email}
        />
      </Center>
    </Section>
  );
}

export default Home;
