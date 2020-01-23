import Vue, {VueConstructor} from 'vue';

export interface VueMediaQueryInterface {
    xs: boolean;
    sm: boolean;
    md: boolean;
    lg: boolean;
}

export interface VueMediaQueryOptionsInterface {
    xs?: number | undefined;
    sm?: number | undefined;
    md?: number | undefined;
    lg?: number | undefined;
}

export declare type VueMediaQuery = {
    install(vue: VueConstructor<Vue>, options?: VueMediaQueryOptionsInterface): void;
};
declare const instance: VueMediaQuery;
export default instance;