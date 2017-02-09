/**
 * Maritime Cloud Service Registry API
 * Maritime Cloud Service Registry, developed under the Horizon 2020 Project EfficienSea2, cofunded by the European Union.
 *
 * OpenAPI spec version: 1.0
 * Contact: josef.jahn@frequentis.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Holds a description of an service instance.An instance can be compatible to one or morespecification templates.It has at least a technical representation of thedescriptiion in form of an XML and a filled out templateas e.g. word document.
 */
export interface Instance {
    comment?: string;

    designId?: string;

    docs?: Array<models.Doc>;

    endpointType?: string;

    endpointUri?: string;

    geometry?: models.JsonNode;

    geometryContentType?: string;

    id?: number;

    imo?: string;

    implementedSpecificationVersion?: models.SpecificationTemplate;

    instanceAsDoc?: models.Doc;

    instanceAsXml?: models.Xml;

    instanceId?: string;

    keywords?: string;

    mmsi?: string;

    name?: string;

    organizationId?: string;

    serviceType?: string;

    specificationId?: string;

    status?: string;

    unlocode?: string;

    version?: string;

    description?: string;
}
