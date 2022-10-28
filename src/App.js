import React from "react";
import { Container } from "./components/styled/Container";
import Profile from "./components/Profile";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";
import Button from "./components/Button";
import GlobalStyles from "./components/styled/Global";

function App() {
  return (
    <Container display="flex" direction="column" alignItems="center">
      <GlobalStyles />

      <Profile />
      <Button
        id="btn_Zuri"
        url="https://training.zuri.team/"
        linkName="Zuri Team"
      />
      <Button
        id="books"
        url="http://books.zuri.team"
        linkName={"Tech Books: Books for coding and design"}
      />
      <Button
        id="book_python"
        url="http://books.zuri.team/python-for-beginners?ref_id=sundayomena9"
        linkName={"Python book for beginners"}
      />
      <Button
        id="pitch"
        url="http://backgroundcheck.zuri.team"
        linkName={"Run background check on your codes"}
      />
      <Button
        id="book_design"
        url="https://books.zuri.team/design-rules"
        linkName={"Design rule cookbook fingertips"}
      />

      <SocialSection />
      <Footer />
    </Container>
  );
}

export default App;
