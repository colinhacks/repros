import Doc from "./file.mdx";
import { renderToString } from "react-dom/server";
console.log(<Doc />);
// ssr the component and log
console.log(renderToString(<Doc />));
