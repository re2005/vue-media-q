import Vue, {VueConstructor} from 'vue';
import {VueMediaQueryInterface, VueMediaQueryOptionsInterface} from '@/plugins/vue-media-query/types/main';

export type vueMediaQuery = {
    install(vue: VueConstructor<Vue>, options: VueMediaQueryOptionsInterface): void;
};

const instance: vueMediaQuery = {
    install(vue: VueConstructor<Vue>, options: VueMediaQueryOptionsInterface) {
        const breakpoints = {
            xs: options.xs || 425,
            sm: options.sm || 769,
            md: options.md || 992,
            lg: options.lg || Infinity
        };

        let isMounted = false;

        class VueMediaQuery {
            size: number = window.innerWidth;

            get xs(): boolean {
                return this.size > 0 && this.size <= breakpoints.xs;
            }

            get sm(): boolean {
                return this.size > breakpoints.xs && this.size <= breakpoints.sm;
            }

            get md(): boolean {
                return this.size > breakpoints.sm && this.size <= breakpoints.md;
            }

            get lg(): boolean {
                return this.size > breakpoints.md && this.size <= breakpoints.lg;
            }

            updateSize(): void {
                this.size = componentInstance.vmq;
            }
        }

        vue.prototype.$vmq = new VueMediaQuery() as VueMediaQueryInterface;

        const componentInstance = new Vue({
            data: () => ({
                vmq: vue.prototype.$vmq
            })
        });

        vue.mixin({
            created(): void {
                if (!isMounted) {
                    isMounted = true;
                    const onResize = (e: any) => {
                        componentInstance.vmq = e.target.innerWidth;
                        vue.prototype.$vmq.updateSize();
                    };
                    window.addEventListener('resize', onResize);
                }
            }
        });
    }
};

export default instance;
