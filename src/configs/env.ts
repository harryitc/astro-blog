import dotenv from "dotenv";
import { loadEnv } from "vite";

// Note: all relative imports
import { prettyPrintObject } from "../utils/log";


const NODE_ENV = process.env.NODE_ENV;
const envFileName = `.env.${NODE_ENV}`;

// Load environment variables from .env file and override existing ones
dotenv.config({ path: envFileName, override: true });

// console.log(loadEnv(process.env.SITE_URL, process.cwd(), ""));


/*------------------ load .env file -----------------*/
// import.meta.env is not available in astro.config.mjs, only after the config is loaded.
// ! MUST use process.env for vars used in astro.config.mjs.
export const LogEnv = (): void => {
    //   const NODE_ENV = process.env.NODE_ENV;
    //   const envFileName = `.env.${NODE_ENV}`;

    //   // Load environment variables from .env file and override existing ones
    //   dotenv.config({ path: envFileName, override: true });

    //   // console.log(loadEnv(process.env.SITE_URL, process.cwd(), ""));
    //   console.log("[Starting Astro with config] Environment Variables:");
    //   prettyPrintObject({
    //     SITE_URL: process.env.SITE_URL,
    //     BASE_PATH: process.env.BASE_PATH,
    //     NODE_ENV: process.env.NODE_ENV,
    //     BASE_URL: process.env.BASE_URL,
    //     // more env variables...
    //   });
};

export const PROCESS_ENV = {
    SITE_URL: process.env.SITE_URL,
    BASE_PATH: process.env.BASE_PATH,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    // more env variables...
};


console.log("[Starting Astro with config] Environment Variables:");
prettyPrintObject(PROCESS_ENV);

// export const ProcessENV = {

// }
