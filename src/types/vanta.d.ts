declare module "vanta/dist/vanta.clouds.min.js" {
  import * as THREE from "three";
  interface VantaOptions {
    el: HTMLElement;
    THREE: typeof THREE;
    [key: string]: unknown;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function CLOUDS(options: VantaOptions): any;
  export default CLOUDS;
}
