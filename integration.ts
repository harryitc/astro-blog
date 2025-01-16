import type { AstroIntegration, AstroIntegrationLogger } from "astro";

const BaseName = "My Logger";

const MyLog = (logger: AstroIntegrationLogger, setting: string, status: string) => {
    // do something
    const logName = `${BaseName}:${setting}:${status}`;
    const buildLogger = logger.fork(logName);
    buildLogger.info(`${setting}/${status} - Finished`);
}

export const formatIntegration = (): AstroIntegration => {
    return {
        name: BaseName,
        hooks: {
            "astro:config:setup": ({ logger }) => {
                // do something
                const setting = "config";
                const status = "setup";
                MyLog(logger, setting, status);
            },
            "astro:config:done": ({ logger }) => {
                // do something
                const setting = "config";
                const status = "done";
                MyLog(logger, setting, status);
            },
            "astro:build:done": ({ logger }) => {
                // do something
                const setting = "build";
                const status = "done";
                MyLog(logger, setting, status);
            },
            "astro:server:start": ({ logger }) => {
                // do something
                const setting = "server";
                const status = "start";
                MyLog(logger, setting, status);
            }
        }
    }
}
// export const formatIntegration = (): AstroIntegration => {
//     return {
//         name: "astro-format",
//         hooks: {
//             // "astro:config:done": ({ logger }) => {
//             //     // do something
//             //     logger.info("Integration ready.");
//             // },
//             // "astro:build:done": ({ logger }) => {
//             //     const buildLogger = logger.fork("astro-format/build");
//             //     // do something
//             //     buildLogger.info("Build finished.")
//             // },
//             "astro:server:start": ({ logger }) => {
//                 const buildLogger = logger.fork("astro-format/build");
//                 // do something
//                 buildLogger.info("Build finished.")
//             }
//         }
//     }
// }