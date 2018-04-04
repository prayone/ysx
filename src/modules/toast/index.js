import toast from './toast.vue'
toast.install = function (Vue) {
    Vue.component(Toast.name, Toast)
}

export default toast