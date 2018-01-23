import Vue from 'vue'
import ExampleComponent from './ExampleComponent.vue';

function renderComponent(Component, props) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor(props).$mount()
    return vm;
}

describe('ExampleComponent', () => {
    it('should have mounted method', function () {
        expect(typeof ExampleComponent.mounted).toBe('function')
    });
    it('should have right template', () => {
        const vm = renderComponent(ExampleComponent, {})
        expect(vm.$el.textContent).toContain('Example Component');
    });
});
