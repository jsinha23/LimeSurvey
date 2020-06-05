<template>
    <div class="CKEditor">
        <ckeditor v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>
<script>

import CKEditorConfig from '../config.js';
export default {
    name: 'CKEditor',
    data() {
        return {
            editorData: '',
            editorConfig: CKEditorConfig,
        };
    },
}
</script>
<style lang="sass">

</style>
