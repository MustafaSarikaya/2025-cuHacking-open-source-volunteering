// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("netlify");

/**
 * The default team ID to use for resources that require a team ID or a team slug. Warning: Changing this value may not
 * trigger recreation of resources.
 */
export declare const defaultTeamId: string | undefined;
Object.defineProperty(exports, "defaultTeamId", {
    get() {
        return __config.get("defaultTeamId");
    },
    enumerable: true,
});

/**
 * The default team slug to use for resources that require a team ID or a team slug. Warning: Changing this value may not
 * trigger recreation of resources.
 */
export declare const defaultTeamSlug: string | undefined;
Object.defineProperty(exports, "defaultTeamSlug", {
    get() {
        return __config.get("defaultTeamSlug");
    },
    enumerable: true,
});

/**
 * Defaults to: https://api.netlify.com
 */
export declare const endpoint: string | undefined;
Object.defineProperty(exports, "endpoint", {
    get() {
        return __config.get("endpoint");
    },
    enumerable: true,
});

/**
 * Read: https://docs.netlify.com/api/get-started/#authentication , will use the `NETLIFY_API_TOKEN` environment variable
 * if not set.
 */
export declare const token: string | undefined;
Object.defineProperty(exports, "token", {
    get() {
        return __config.get("token");
    },
    enumerable: true,
});

