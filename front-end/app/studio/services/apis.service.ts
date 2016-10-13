import {OpaqueToken} from "@angular/core";
import {Observable} from 'rxjs/Observable';

import {Api} from "../models/api.model";


export interface IApisService {

    /**
     * Gets an array of the repository types supported by this apis service.
     *
     * @return string[]
     */
    getSupportedRepositoryTypes(): string[];

    /**
     * Gets an observable over all of the APIs.  The list of APIs is not guaranteed
     * to be in any particular order.  The resulting observer can be used to watch for
     * changes to the list of APIs.
     */
    getAllApis(): Observable<Api[]>;

    /**
     * Gets an observable over the recent APIs.  Callers can then subscribe to this
     * observable to be notified when the value changes.
     *
     * @return Observable<Api[]>
     */
    getRecentApis(): Observable<Api[]>;

    /**
     * Creates a new API with the given information.  This will store the API in whatever
     * storage is used by this service impl.  It will return a Promise that the caller can
     * use to be notified when the API has been successfully stored.
     * @param api
     * @return Promise<Api>
     */
    createApi(api: Api): Promise<Api>;

    /**
     * Gets a single Api by its ID.
     * @param apiId the ID of the api
     */
    getApi(apiId: string): Promise<Api>;

}

export const IApisService = new OpaqueToken("IApisService");
