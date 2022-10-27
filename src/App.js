import React from "react";
import { Container } from "./components/styled/Container";
import Profile from "./components/Profile";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Container display="flex" direction="column"  >
      <Container display = "flex" padding="4px 144px">
        <Profile />
      </Container>
<SocialSection />
<Footer />
    </Container>
  );
}

export default App;
