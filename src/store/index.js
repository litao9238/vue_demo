import Vue from 'vue'
import vuex from 'vuex'

// 主框架以及公共部分
import state from './common/state'
import getters from './common/getters'
import actions from './common/actions'
import mutations from './common/mutations'

// 各模块自己相关的内容
import xxx from './modules/xxx'


Vue.use(vuex);
export default new vuex.Store({
	state,
    getters,
    actions,
    mutations,
    modules: {
    	xxx
    }
})