// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getTeam(args?: GetTeamArgs, opts?: pulumi.InvokeOptions): Promise<GetTeamResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("netlify:index/getTeam:getTeam", {
        "id": args.id,
        "slug": args.slug,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamArgs {
    id?: string;
    slug?: string;
}

/**
 * A collection of values returned by getTeam.
 */
export interface GetTeamResult {
    readonly id: string;
    readonly name: string;
    readonly slug: string;
}
export function getTeamOutput(args?: GetTeamOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTeamResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("netlify:index/getTeam:getTeam", {
        "id": args.id,
        "slug": args.slug,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getTeam.
 */
export interface GetTeamOutputArgs {
    id?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
}
