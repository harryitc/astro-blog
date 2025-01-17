import dotenv from "dotenv";

type ProcessEnvType = {
    SITE_URL?: string;
    BASE_PATH?: string;
    NODE_ENV?: string;
    BASE_URL?: string;
};

// Note: all relative imports
import { prettyPrintObject } from "../utils/log";


const NODE_ENV = process.env.NODE_ENV;
const nodeEnvValues = ["development", "production", "testing"];

if (!nodeEnvValues.includes(NODE_ENV)) {
    // eslint-disable-next-line no-console
    console.error('Invalid process.env.NODE_ENV: ', NODE_ENV);
    throw new Error('Invalid process.env.NODE_ENV');
}

const envFileName = `.env.${NODE_ENV}`;

// Load environment variables from .env file and override the environment
dotenv.config({ path: envFileName, override: true });

// console.log(loadEnv(process.env.SITE_URL, process.cwd(), ""));


/*------------------ load .env file -----------------*/
// import.meta.env is not available in astro.config.mjs, only after the config is loaded.
// ! MUST use process.env for vars used in astro.config.mjs.
export const LogEnv = (): void => {

};

const processEnvData: ProcessEnvType = {
    SITE_URL: process.env.SITE_URL,
    BASE_PATH: process.env.BASE_PATH,
    NODE_ENV: process.env.NODE_ENV,
    BASE_URL: process.env.BASE_URL,
    // more env variables...
};

console.log("[Starting Astro with config] Environment Variables:");
prettyPrintObject(processEnvData);

export const PROCESS_ENV = processEnvData;




// export const ProcessENV = {

// }
