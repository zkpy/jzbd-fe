/*
 * @Author: hayyot
 * @Date: 2023-04-13 08:20:38
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\router\index.js
 */
import home from '@/views/home/home.vue';
import ParkService from '@/views/park-service/park-service.vue';
import EnterpriseStorm from '@/views/enterprise-storm/enterprise-storm.vue';
import MoreEnterprise from '@/views/enterprise-storm/more-enterprise.vue';
import MakerPort from '@/views/maker-port/maker-port.vue';
import Cooperation from '@/views/cooperation/cooperation.vue';
import CooperationDetails from '@/views/cooperation/cooperationDetails';
import PolicyRelease from '@/views/policy-release/policy-release.vue';
import MorePolicies from '@/views/policy-release/more-policies.vue';
import PolicyList from '@/views/policy-release/policy-list.vue';
import PolicyDetails from '@/views/policy-release/policy-details.vue';
import Contact from '@/views/contact/contact.vue';
import Serviceinformation from '@/views/park-service/information/information.vue';
import Sercicedetails from '@/views/park-service/details/servicedetails.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  { path: '/', component: home },
  { path: '/service', component: ParkService },
  {
    path: '/service/list',
    component: Sercicedetails,
    meta: {
      keepAlive: true // 不需要缓存
    }
  },
  {
    path: '/service/information/:id',
    component: Serviceinformation,
    meta: {
      keepAlive: true // 不需要缓存
    }
  },
  { path: '/enterprise-storm', component: EnterpriseStorm },
  {
    path: '/enterprise-storm/more-enterprise/:id',
    component: MoreEnterprise,
    meta: {
      keepAlive: true // 不需要缓存
    }
  },
  { path: '/maker-port', component: MakerPort },
  { path: '/cooperation', component: Cooperation },
  { path: '/park_information/park_information/t/:id', component: CooperationDetails },
  { path: '/policy-release', component: PolicyRelease },
  {
    path: '/policy-release/more-policies',
    component: MorePolicies,
    children: [
      {
        path: 'list',
        component: PolicyList
      },
      {
        path: 'details/:id',
        component: PolicyDetails
      }
    ]
  },
  { path: '/contact', component: Contact }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
