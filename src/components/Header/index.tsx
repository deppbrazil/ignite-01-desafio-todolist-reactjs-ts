import { HeaderContainer } from "./style.js";
import Brand from "../Brand/index.js";

export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <Brand />
        <h1>todo</h1>
      </div>
    </HeaderContainer>
  );
}
