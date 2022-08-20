export function patchXMLHTTPRequest(beforeRequestCallback: any, afterRequestCallback: any, data: any, openCallback?: typeof defaultCB): void;
export function patchFetch(beforeRequestCallback: any, afterRequestCallback: any, data: any): void;
export function observeResourceFetchingMutations(callback: any): MutationObserver;
import { defaultCB } from "./formatters";
