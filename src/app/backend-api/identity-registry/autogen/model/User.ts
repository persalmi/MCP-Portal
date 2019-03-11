/**
 * Maritime Connectivity Platform Identity Registry API
 * MCP Identity Registry API can be used for managing entities in the Maritime Connectivity Platform.
 *
 * OpenAPI spec version: 0.7.0
 * Contact: info@maritimecloud.net
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface User {
    /**
     * Cannot be created/updated by editing in the model. Use the dedicate create and revoke calls.
     */
    certificates?: Array<models.Certificate>;

    createdAt?: Date;

    email: string;

    id?: number;

    firstName: string;

    lastName: string;

    /**
     * The Maritime Resource Name
     */
    mrn: string;

    /**
     * Permissions as assigned from the organization
     */
    permissions?: string;

    updatedAt?: Date;

}
