// 路由懒加载
const Layout = () => import('layout/index.vue')
const Home = () => import('views/Home.vue')
const NotFound = () => import('comps/NotFound.vue')
const Test = () => import('views/Test.vue')

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: { title: '导航', icon: 'el-icon-s-home' },
    children: [
      {
        path: 'home',
        component: Home,
        name: 'home',
        meta: { title: '首页', icon: 'el-icon-s-home' },
        children: [
          {
            path: ':id',
            component: () => import('views/Detail.vue'),
            name: 'Detail',
            hidden: true,
            meta: {
              title: '详情',
              icon: 'el-icon-s-home',
              activeMenu: '/home',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/users',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'el-icon-user-solid',
    },
    redirect: '/users/list',
    children: [
      {
        path: 'list',
        component: () => import('views/users/List.vue'),
        meta: {
          title: '用户列表',
          icon: 'el-icon-document',
        },
      },
      {
        path: 'create',
        component: () => import('views/users/Create.vue'),
        hidden: true,
        meta: {
          title: '创建新用户',
          activeMenu: '/users/create',
        },
      },
      {
        path: 'edit/:id(\\d+)',
        name: 'userEdit',
        component: () => import('views/users/Edit.vue'),
        hidden: true,
        meta: {
          title: '编辑用户信息',
          activeMenu: '/users/list',
        },
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    redirect: '/test/demo',
    meta: {
      title: '测试',
      notChild: true
    },
    children: [
      {
        path: 'demo',
        component: Test,
        meta: {
          activeMenu: '/test',
        }
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

export default routes