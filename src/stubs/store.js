const store = {
    methods: {
        add(resource, data) {
            _.get(this, resource).push(data);
        },
        delete(resource, element) {
            let target = _.get(this, resource);
            let element_id = target.indexOf(element);

            if (element_id > -1) {
                target.splice(element_id, 1);
            }
        },
        set(resource, data) {
            _.set(this, resource, data);
        },
        prepend(resource, data) {
            _.get(this, resource).unshift(data);
        },
        update(resource, data) {
            return this.updateById(resource, data.id, data);
        },
        updateById(resource, id, data) {
            return new Promise((resolve, reject) => {
                let target = _.get(this, resource);

                if (target) {
                    if (Array.isArray(target)) {
                        let element = target.find((element) => {
                            return element.id == id;
                        });
                        let element_id = target.indexOf(element);

                        if (element_id > -1) {
                            if (element._key) {
                                data._key = element._key;
                            }
                            target.splice(element_id, 1, data);
                        }
                    } else {
                        _.set(this, resource, data);
                    }
                    resolve();
                } else {
                    reject();
                }
            });
        },
    },
};

export default {
    install(Vue, options) {
        if (options.js_namespace && window[options.js_namespace]) {
            options.data = Object.assign({}, options.data, window[options.js_namespace]);
        }

        window.store = new Vue(Object.assign(store, { data: options.data }));
    },
}
