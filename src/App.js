import React from "react";
import { Container } from "./components/styled/Container";
import Profile from "./components/Profile";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import Button from "./components/Button";
import GlobalStyles from "./components/styled/Global";

function App() {
  return (
    <Container display="flex" direction="column"  >
          <GlobalStyles />

      <Container display = "flex" direction="column" padding="4px 144px">
        <Profile />
        <Button id="btn_Zuri" url="https://training.zuri.team/" linkName="Zuri Team"/>
        <Button id="books" url="http://books.zuri.team" linkName={"Tech Books"}/>
        <Button id="book_python" url="http://books.zuri.team/python-for-beginners" linkName={"Python books"}/>
        <Button id="pitch" url="http://backgroundcheck.zuri.team" linkName={"background check on coders"}/>
        <Button id="book_design" url="https://books.zuri.team/design-rules" linkName={"Design cook book for UI/UX designers"}/>



      </Container>
<SocialSection />
<Footer />
    </Container>
  );
}

export default App;
