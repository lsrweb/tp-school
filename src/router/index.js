import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/register',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/questionnaire',
    component: Layout,
    alwaysShow: true,
    meta: { title: '问卷管理', icon: 'dashboard' },
    children: [
      {
        path: '/questionnaire/questionnaire_list',
        name: 'QuestionnaireList',
        component: () => import('@/views/questionnaire/index'),
        meta: { title: '问卷管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/question_manager',
    component: Layout,
    alwaysShow: true,
    meta: { title: '题库管理', icon: 'dashboard' },
    children: [
      {
        path: '/question_manager/question_list',
        name: 'QuestionList',
        component: () => import('@/views/question/index'),
        meta: { title: '题库管理', icon: 'dashboard' }

      }
    ]
  },
  {
    path: '/professional',
    component: Layout,
    alwaysShow: true,
    meta: { title: '专业管理', icon: 'dashboard' },
    children: [
      {
        path: '/professional/professional_list',
        name: 'ProfessionalList',
        component: () => import('@/views/professional/index'),
        meta: { title: '专业管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/grade',
    component: Layout,
    alwaysShow: true,
    meta: { title: '年级管理', icon: 'dashboard' },
    children: [
      {
        path: '/grade/grade_list',
        name: 'GradeList',
        component: () => import('@/views/grade/index'),
        meta: { title: '年级管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/teacher_manager',
    component: Layout,
    alwaysShow: true,
    meta: { title: '教师管理', icon: 'dashboard' },
    children: [
      {
        path: '/teacher_manager/teacher_list',
        name: 'TeacherList',
        component: () => import('@/views/teacher/index'),
        meta: { title: '教师管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/class_manager',
    component: Layout,
    alwaysShow: true,
    meta: { title: '班级管理', icon: 'dashboard' },
    children: [
      {
        path: '/class_manager/class_list',
        name: 'ClassList',
        component: () => import('@/views/class/index'),
        meta: { title: '班级管理', icon: 'dashboard' }
      }
    ]
  },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
