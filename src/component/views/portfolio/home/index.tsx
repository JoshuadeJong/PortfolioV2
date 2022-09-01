import React from "react";

import ResumeContext from "provider/ResumeContext";
import { Center } from "component/layout";
import NameTitle from "./components/NameTitle";

type Props = {};

function Home(props: Props) {
  const {} = props;
  const { nameFirst, github, linkedin, email } =
    React.useContext(ResumeContext);
  const [pageHeight, setPageHeight] = React.useState(0);

  React.useEffect(() => {
    const updateWindowDimensions = () => {
      setPageHeight(window.innerHeight - 64); // Remove the pixel height of the header
    };
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Center minHeight={`${pageHeight}px`}>
      <NameTitle
        name={nameFirst}
        github={github}
        linkedin={linkedin}
        email={email}
      />
    </Center>
  );
}

export default Home;
