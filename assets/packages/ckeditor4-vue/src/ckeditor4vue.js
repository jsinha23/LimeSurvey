import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';
import CKEditor4 from './CkEditor.vue';

Vue.config.ignoreElements = ["x-test"];
Vue.config.devtools = false;

Vue.use(CKEditor);

var ckeditor4vue = new Vue({
    el: '#app',
    components: {
        ckeditor4: CKEditor4,
    },
});
