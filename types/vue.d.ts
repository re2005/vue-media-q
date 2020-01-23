import Vue, {VueConstructor} from 'vue';
import {VueMediaQueryInterface} from '@/plugins/vue-media-query';

declare module 'vue/types/vue' {

    interface Vue {
        $vmq: VueMediaQueryInterface;
    }

    interface VueConstructor {
        $vmq: VueMediaQueryInterface;
    }
}

declare module 'vue/types/options' {
    interface ComponentOptions<V extends Vue> {
        $vmq?: VueMediaQueryInterface;
    }
}

export {VueConstructor};
export default Vue;
