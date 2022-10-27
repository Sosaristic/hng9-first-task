import React from "react";
import { Container } from "./components/styled/Container";
import Profile from "./components/Profile";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  return (
    <Container display="flex" direction="column"  >
      <Container display = "flex" direction="column" padding="4px 144px">
        <Profile />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        
      </Container>
<SocialSection />
<Footer />
    </Container>
  );
}

export default App;
