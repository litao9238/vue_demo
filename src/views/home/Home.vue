<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="300px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        created() {
            this.axios.get('/xxx', 'type=1')
                .then(res => {
                    console.log(res)
                })
        }
    }
</script>
<style>

</style>