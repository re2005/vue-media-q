# Vue Media Query


This is a minimimalistc vue plugin to help frontenders building cool UI by managing what should be visible on each screen size.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# Features!

  - Display current media size (xs, sm, md and lg)
  - Medias sizes configurable

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm i vue-media-query --save
```

Usage

```js
import Vue from 'vue'
import VueMediaQuery from 'vue-media-query'

Vue.use(VueMediaQuery, {
    xs: 425,
    sm: 769,
    md: 992,
    lg: Infinity
});
```

If no options is passed VueMediaQuery will use default values

### Usage

Inside your template you can simply do

```
<template>
    <div>
        Will be true when matches the media size you have defined
        {{ $vmq.xs }} 
        {{ $vmq.sm }}
        {{ $vmq.md }}
        {{ $vmq.lg }}
        {{ $vmq.size }} -> Returns the current screen witdh
    <div>
</template>
```

Using as computed property

```js
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {
        console.log(this.$vmq.sm)
        // Will console TRUE whem media size is the defined SM
    }
</script>
```

### Development

Want to contribute? Please submit a PR or report issues.

### Todos

 - Write Tests
 - Test on more browsers

## License

 - GPL3

