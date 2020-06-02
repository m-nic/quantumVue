/* eslint-disable  */

import {SimpleJsRpc, SocketIoCallStrategy} from "simple-js-rpc";

function QuantumVue() {
    // SocketIoCallStrategy.setConnection("http://localhost:3000");
    SocketIoCallStrategy.setConnection("http://192.168.43.111:3000/");
    SimpleJsRpc.setRemoteCallStrategy(SocketIoCallStrategy);

    return {
        install(Vue, options) {
            Vue.prototype.$rpc = function (cName, iClass) {
                cName = cName ? cName : this.$options.name;

                SimpleJsRpc.bindClass(cName, iClass);
                SimpleJsRpc.listen();

                return SimpleJsRpc.for(cName);
            }
        }
    };
}

export default QuantumVue;
