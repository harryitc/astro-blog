import { PROCESS_ENV } from "@configs/process-env";

let baseUrl = PROCESS_ENV.BASE_PATH;
if (baseUrl && baseUrl.endsWith('/')) {
  baseUrl = baseUrl.slice(0, -1);
}


export const MyPath = (path: string): string =>{
  return (baseUrl === '/' ? '' : baseUrl) + "/" + path;
}