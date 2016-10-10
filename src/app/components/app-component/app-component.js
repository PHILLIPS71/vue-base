import Vue from 'vue';

const AppComponent = Vue.extend({
    template: '<h1>Hello {{ $route.params.id }}!</h1>',
});

export default AppComponent;