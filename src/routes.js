import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import Calendar from './views/calendar/index.vue'
import Bill from './views/bill/index.vue'
import Packing from './views/packing/index.vue'
import Shipping from './views/shipping/index.vue'
import LetterCredit from './views/letterCredit/index.vue'
import TaxRefund from './views/taxRefund/index.vue'
import Product from './views/product/index.vue'
import Customer from './views/customer/index.vue'
import echarts from './views/charts/echarts.vue'

let routes = [{
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    }, {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [{
            path: '/calendar',
            component: Calendar,
            name: '日程&船期'
        }]
    }, {
        path: '/',
        component: Home,
        name: '录单',
        iconCls: 'fa fa-id-card-o',
        children: [{
            path: '/letterCredit',
            component: LetterCredit,
            name: '信用证(L/C)或合同'
        }, {
            path: '/shipping',
            component: Shipping,
            name: '入货通知'
        }]
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-message', //图标样式class
        leaf: true,
        children: [{
            path: '/paking',
            component: Packing,
            name: '箱单&发票(Packing List)'
        }]
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [{
            path: '/bill',
            component: Bill,
            name: '提单(BILL OF LADING)'
        }]
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [{
            path: '/taxRefund',
            component: TaxRefund,
            name: '退税'
        }]
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [{
            path: '/product',
            component: Product,
            name: '产品列表'
        }]
    }, {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true, //只有一个节点
        children: [{
            path: '/customer',
            component: Customer,
            name: '客户列表'
        }]
    }, {
        path: '/',
        component: Home,
        name: '业务统计',
        iconCls: 'fa fa-bar-chart',
        children: [{
            path: '/echarts',
            component: echarts,
            name: 'echarts'
        }]
    }, {
        path: '*',
        hidden: true,
        redirect: {
            path: '/404'
        }
    }
];

export default routes;