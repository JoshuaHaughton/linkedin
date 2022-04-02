declare module "*.module.css";
declare module "*.module.scss";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const url: string;
  export default url;
}