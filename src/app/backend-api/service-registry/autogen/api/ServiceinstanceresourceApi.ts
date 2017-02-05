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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class ServiceinstanceresourceApi {
    protected basePath = 'https://sr-test.maritimecloud.net/';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * 
     * Extends object by coping non-existing properties.
     * @param objA object to be extended
     * @param objB source object
     */
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                (objA as any)[key] = (objB as any)[key];
            }
        }
        return <T1&T2>objA;
    }

    /**
     * createInstance
     * 
     * @param instance instance
     */
    public createInstanceUsingPOST(instance: models.Instance, extraHttpRequestParams?: any): Observable<models.Instance> {
        return this.createInstanceUsingPOSTWithHttpInfo(instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * deleteInstance
     * 
     * @param id id
     * @param version version
     */
    public deleteInstanceUsingDELETE(id: string, version: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteInstanceUsingDELETEWithHttpInfo(id, version, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getAllInstancesById
     * 
     * @param id id
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllInstancesByIdUsingGET(id: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.getAllInstancesByIdUsingGETWithHttpInfo(id, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getAllInstances
     * 
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllInstancesUsingGET(page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.getAllInstancesUsingGETWithHttpInfo(page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * getInstance
     * Returns the service instance with the specified id and version. Use version &#39;latest&#39; to get the newest one.
     * @param id id
     * @param version version
     */
    public getInstanceUsingGET(id: string, version: string, extraHttpRequestParams?: any): Observable<models.Instance> {
        return this.getInstanceUsingGETWithHttpInfo(id, version, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstancesByGeometryGeojson
     * Returns all service instances matching the specified GeoJson shape.
     * @param geometry geometry
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByGeometryGeojsonUsingGET(geometry: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesByGeometryGeojsonUsingGETWithHttpInfo(geometry, query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstancesByGeometryWKT
     * Returns all service instances matching the specified WKT shape.
     * @param geometry geometry
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByGeometryWKTUsingGET(geometry: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesByGeometryWKTUsingGETWithHttpInfo(geometry, query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstancesByKeywords
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByKeywordsUsingGET(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesByKeywordsUsingGETWithHttpInfo(query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstancesByLocation
     * Returns all service instances matching the specified Lat/Lon coordinates.
     * @param latitude latitude
     * @param longitude longitude
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByLocationUsingGET(latitude: string, longitude: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesByLocationUsingGETWithHttpInfo(latitude, longitude, query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstancesByUnlocode
     * Returns all service instances matching the specified UnLoCode.
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByUnlocodeUsingGET(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesByUnlocodeUsingGETWithHttpInfo(query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * searchInstances
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesUsingGET(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Array<models.Instance>> {
        return this.searchInstancesUsingGETWithHttpInfo(query, page, size, sort, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateInstanceStatus
     * 
     * @param id id
     * @param version version
     * @param status status
     */
    public updateInstanceStatusUsingPUT(id: string, version: string, status: string, extraHttpRequestParams?: any): Observable<{}> {
        return this.updateInstanceStatusUsingPUTWithHttpInfo(id, version, status, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * updateInstance
     * 
     * @param instance instance
     */
    public updateInstanceUsingPUT(instance: models.Instance, extraHttpRequestParams?: any): Observable<models.Instance> {
        return this.updateInstanceUsingPUTWithHttpInfo(instance, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * createInstance
     * 
     * @param instance instance
     */
    public createInstanceUsingPOSTWithHttpInfo(instance: models.Instance, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling createInstanceUsingPOST.');
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: instance == null ? '' : JSON.stringify(instance), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * deleteInstance
     * 
     * @param id id
     * @param version version
     */
    public deleteInstanceUsingDELETEWithHttpInfo(id: string, version: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance/${id}/${version}/`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteInstanceUsingDELETE.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling deleteInstanceUsingDELETE.');
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getAllInstancesById
     * 
     * @param id id
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllInstancesByIdUsingGETWithHttpInfo(id: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance/${id}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getAllInstancesByIdUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getAllInstances
     * 
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public getAllInstancesUsingGETWithHttpInfo(page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * getInstance
     * Returns the service instance with the specified id and version. Use version &#39;latest&#39; to get the newest one.
     * @param id id
     * @param version version
     */
    public getInstanceUsingGETWithHttpInfo(id: string, version: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance/${id}/${version}/`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getInstanceUsingGET.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling getInstanceUsingGET.');
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstancesByGeometryGeojson
     * Returns all service instances matching the specified GeoJson shape.
     * @param geometry geometry
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByGeometryGeojsonUsingGETWithHttpInfo(geometry: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_searchGeometryGeoJSON/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'geometry' is not null or undefined
        if (geometry === null || geometry === undefined) {
            throw new Error('Required parameter geometry was null or undefined when calling searchInstancesByGeometryGeojsonUsingGET.');
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesByGeometryGeojsonUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (geometry !== undefined) {
            queryParameters.set('geometry', <any>geometry);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstancesByGeometryWKT
     * Returns all service instances matching the specified WKT shape.
     * @param geometry geometry
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByGeometryWKTUsingGETWithHttpInfo(geometry: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_searchGeometryWKT/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'geometry' is not null or undefined
        if (geometry === null || geometry === undefined) {
            throw new Error('Required parameter geometry was null or undefined when calling searchInstancesByGeometryWKTUsingGET.');
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesByGeometryWKTUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (geometry !== undefined) {
            queryParameters.set('geometry', <any>geometry);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstancesByKeywords
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByKeywordsUsingGETWithHttpInfo(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_searchKeywords/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesByKeywordsUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstancesByLocation
     * Returns all service instances matching the specified Lat/Lon coordinates.
     * @param latitude latitude
     * @param longitude longitude
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByLocationUsingGETWithHttpInfo(latitude: string, longitude: string, query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_searchLocation/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'latitude' is not null or undefined
        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling searchInstancesByLocationUsingGET.');
        }
        // verify required parameter 'longitude' is not null or undefined
        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling searchInstancesByLocationUsingGET.');
        }
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesByLocationUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (latitude !== undefined) {
            queryParameters.set('latitude', <any>latitude);
        }
        if (longitude !== undefined) {
            queryParameters.set('longitude', <any>longitude);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstancesByUnlocode
     * Returns all service instances matching the specified UnLoCode.
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesByUnlocodeUsingGETWithHttpInfo(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_searchUnlocode/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesByUnlocodeUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * searchInstances
     * 
     * @param query query
     * @param page Page number of the requested page
     * @param size Size of a page
     * @param sort Sorting criteria in the format: property(,asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    public searchInstancesUsingGETWithHttpInfo(query: string, page?: number, size?: number, sort?: Array<string>, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/_search/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'query' is not null or undefined
        if (query === null || query === undefined) {
            throw new Error('Required parameter query was null or undefined when calling searchInstancesUsingGET.');
        }
        if (page !== undefined) {
            queryParameters.set('page', <any>page);
        }
        if (size !== undefined) {
            queryParameters.set('size', <any>size);
        }
        if (query !== undefined) {
            queryParameters.set('query', <any>query);
        }
        if (sort !== undefined) {
            queryParameters.set('sort', <any>sort);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * updateInstanceStatus
     * 
     * @param id id
     * @param version version
     * @param status status
     */
    public updateInstanceStatusUsingPUTWithHttpInfo(id: string, version: string, status: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance/${id}/${version}/status`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateInstanceStatusUsingPUT.');
        }
        // verify required parameter 'version' is not null or undefined
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling updateInstanceStatusUsingPUT.');
        }
        // verify required parameter 'status' is not null or undefined
        if (status === null || status === undefined) {
            throw new Error('Required parameter status was null or undefined when calling updateInstanceStatusUsingPUT.');
        }
        if (status !== undefined) {
            queryParameters.set('status', <any>status);
        }


        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            



        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * updateInstance
     * 
     * @param instance instance
     */
    public updateInstanceUsingPUTWithHttpInfo(instance: models.Instance, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/api/serviceInstance`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'instance' is not null or undefined
        if (instance === null || instance === undefined) {
            throw new Error('Required parameter instance was null or undefined when calling updateInstanceUsingPUT.');
        }

        // to determine the Content-Type header
        let consumes: string[] = [
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];
        
            

        headers.set('Content-Type', 'application/json');


        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: instance == null ? '' : JSON.stringify(instance), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });
        
        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}
