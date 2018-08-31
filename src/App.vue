<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {}
        }
    }
</script>
<style lang="less">
    body {
        padding: 0;
        margin: 0;
    }
    #app {
        width: 100%;
        height: 100%;
    }
</style>