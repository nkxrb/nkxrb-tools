import BudButton from './button.vue'

BudButton.install = function (Vue) {
  Vue.component(BudButton.name, BudButton);
}

export default BudButton