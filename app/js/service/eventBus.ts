module calypso.Services {

    interface Subscription {
        token: string
        handler: (args?: any) => void
        scope: {}
        priority?: number
    }

    let self: any;

    /**
     * This is a very simple EventBus Implementation for
     * subscribe/publish capabilities
     */
    export class EventBus {

        private _topics: {[key:string]: Subscription[]};
        private _subUid: number;

        constructor() {
            self = this;

            self._topics = {};
            self._subUid = -1;
        }

        public subscribe(topic: string, scope: {}, handler: (args?: any) => void, priority?: number): string {
            if (!self._topics[topic]) {
                self._topics[topic] = [];
            }

            let token = (++self._subUid).toString();
            self._topics[topic].push({
                token: token,
                handler: handler,
                scope: scope,
                priority: priority || 10000
            });

            return token;
        }

        public publish(topic: string, args?: any): boolean {
            if (!self._topics[topic]) {
                return false;
            }

            let subscribers = self._topics[topic];
            let len = subscribers ? subscribers.length : 0;

            if (len > 0) {
                subscribers.sort((a: any, b: any) => {
                    return a.priority - b.priority;
                }).forEach((subscriber: Subscription) => {
                    if (angular.isFunction(subscriber.handler)) {
                        subscriber.handler.call(subscriber.scope, args);
                    }
                })
            }

            return true;
        }

        public unsubscribe(token: string): boolean {
            for (var topic in self._topics) {
                if (self._topics[topic]) {
                    for (var i = 0, j = self._topics[topic].length; i < j; i++) {
                        if (self._topics[topic][i].token === token) {
                            self._topics[topic].splice(i, 1);
                            return true;
                        }
                    }
                }
            }

            return false;
        }
    }

    angular.module('calypso.services').service('EventBus', EventBus);
}
