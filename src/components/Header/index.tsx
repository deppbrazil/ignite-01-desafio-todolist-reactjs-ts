// Style
import { WrapperHeader } from "./style.js";

// Components
import Brand from "../Brand/index.js";

export default function Header() {
  return (
    <WrapperHeader>
      <div>
        <Brand />
        <h1>todo</h1>
      </div>
    </WrapperHeader>
  );
}
