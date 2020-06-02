# A simple VueJs plugin that uses simpleJsRpc that allows state sync for multiple app instances

```javascript

Vue.use(QuantumVue());


...

let $rpc = this.$rpc('vue', this);
$rpc.theRemoteFn(...args).then(...);

```
