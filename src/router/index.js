import { createRouter, createWebHistory } from 'vue-router'
import BhamlaStyleHome from '../views/BhamlaStyleHome.vue'
import TemperatureDashboard from '../views/TemperatureDashboard.vue'
import VideoMonitor from '../views/VideoMonitor.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BhamlaStyleHome,
    meta: {
      title: 'HZAU AIoT Lab | Renovation And Vision',
      description: '华中农业大学AIoT实验室 - 致力于农业物联网技术研究与创新'
    }
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import('../views/ResearchPage.vue'),
    meta: {
      title: '研究领域 - HZAU AIoT Lab',
      description: '了解我们在农业物联网、智能传感器、精准农业等领域的研究工作'
    }
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import('../views/PublicationsPage.vue'),
    meta: {
      title: '发表论文 - HZAU AIoT Lab',
      description: '查看我们实验室发表的学术论文和研究成果'
    }
  },
  {
    path: '/latest-news',
    name: 'LatestNews',
    component: () => import('../views/NewsPage.vue'),
    meta: {
      title: '科研进展 - HZAU AIoT Lab',
      description: '了解实验室最新的研究进展和学术动态'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue'),
    meta: {
      title: '关于我们 - HZAU AIoT Lab',
      description: '了解华中农业大学AIoT实验室的历史、愿景和团队成员'
    }
  },
  {
    path: '/join-lab',
    name: 'JoinLab',
    component: () => import('../views/JoinLabPage.vue'),
    meta: {
      title: '加入实验室 - HZAU AIoT Lab',
      description: '了解如何申请加入我们的研究团队'
    }
  },
  // 保留原有的IoT系统路由
  {
    path: '/dashboard',
    name: 'TemperatureDashboard',
    component: TemperatureDashboard,
    meta: {
      title: '温度监控 - IoT Dashboard',
      description: '实时温度监控仪表板'
    }
  },
  {
    path: '/video',
    name: 'VideoMonitor',
    component: VideoMonitor,
    meta: {
      title: '视频监控 - IoT Dashboard',
      description: '实时视频监控系统'
    }
  },
  {
    path: '/yjDemo',
    name: 'YjDemo',
    component: () => import('../views/yjDemo.vue'),
    meta: {
      title: '演示系统 - HZAU AIoT Lab',
      description: '技术演示和原型系统'
    }
  },
  // 重定向处理
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/index',
    redirect: '/'
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundPage.vue'),
    meta: {
      title: '页面未找到 - HZAU AIoT Lab'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 页面切换时滚动到顶部
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 更新页面标题和描述
router.beforeEach((to, from, next) => {
  // 更新页面标题
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  
  // 更新meta描述
  if (to.meta && to.meta.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      metaDescription.content = to.meta.description
      document.head.appendChild(metaDescription)
    }
  }
  
  next()
})

export default router