export default pharosMethods;
declare namespace pharosMethods {
    export { configure };
    export { trackError };
    export { setUser };
    export { setStore };
    export { setRelease };
    export { setPageDetails };
    export { trackEvent };
    export { trackClick };
    export { trackNavigation };
}
import configure from "./methods/configure";
import { trackError } from "./methods/pharosGlobalMethods";
import { setUser } from "./methods/pharosGlobalMethods";
import { setStore } from "./methods/pharosGlobalMethods";
import { setRelease } from "./methods/pharosGlobalMethods";
import { setPageDetails } from "./methods/pharosGlobalMethods";
import trackEvent from "./methods/trackEvent";
import { trackClick } from "./methods/customEvents";
import { trackNavigation } from "./methods/customEvents";
