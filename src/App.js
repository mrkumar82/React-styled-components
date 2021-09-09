import "./styles.css";

import StyledButton from "./elements/StyledButton";
import StyledHeader from "./elements/StyledHeader";
import StyledSection from "./elements/StyledSection";
import MaterialButton from "./elements/MaterialButton";
import { ThemeProvider } from "styled-components";
import { BlueTheme, GreenTheme } from "./theme/Theme";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GreenTheme}>
        <StyledSection>
          <StyledHeader>React Styled components</StyledHeader>
          <StyledButton primary>Submit</StyledButton>
          <MaterialButton>Submit</MaterialButton>
        </StyledSection>
      </ThemeProvider>
    </div>
  );
}
