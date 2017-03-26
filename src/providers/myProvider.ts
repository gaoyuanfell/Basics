
import { Provider, FactoryProvider } from "@angular/core";

export class MyProvider implements FactoryProvider {
    provide: any;
    useFactory: Function;
    deps: any[];
    multi: boolean;

    constructor(parameters) {

    }
}
