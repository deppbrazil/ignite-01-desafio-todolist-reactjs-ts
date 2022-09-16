// Style
import { SHeader } from "./style.js";

// Components
import Brand from "../Brand/index.js";

export default function Header() {
  return (
    <SHeader>
      <div>
        <Brand />
        <h1>todo</h1>
      </div>
    </SHeader>
  );
}
