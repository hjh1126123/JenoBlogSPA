import header from './modules/h-header.vue'
import card from './modules/h-card.vue'
import delay from './modules/h-delay-div.vue'
import label from './modules/h-label.vue'
import list from './modules/h-list.vue'
import pagination from './modules/h-pagination.vue'

const components = {
    header,
    card,
    delay,
    label,
    list,
    pagination
};

const install = function (Vue) {
    if (install.installed) return;

    Object.keys(components).forEach(key => Vue.component(components[key].name, components[key]));
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export function createHComponent (Vue) {
    install(Vue);
}