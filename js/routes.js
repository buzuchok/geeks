// alert('++resources/js/routes.js')
// import VueRouter from 'vue-router'

import HomePage from "./components/Home.vue";

import ProjectsPage from "./components/project/Projects.vue";
import ProjectDetailPage from "./components/project/ProjectDetail.vue";
import ProjectsByCategoryPage from "./components/project/ProjectsByCategory.vue";
import ProjectAddPage from "./components/project/ProjectAdd.vue";
import CommunityPage from "./components/Community.vue";
import CommunityAdd from "./components/CommunityAdd.vue";
import GigsPage from "./components/Gigs.vue";
import Gig from "./components/Gig.vue";
import GigAdd from "./components/GigAdd.vue";
import Buyer from "./components/Buyer.vue";
import Checkout from "./components/Checkout.vue";
import Order from "./components/Order.vue";
import Conversation from "./components/Conversation.vue";
import EducationPage from "./components/Education.vue";
import UserProfile from "./components/UserProfile.vue";
import AllOrder from "./components/AllOrder.vue";
import ActiveOrder from "./components/ActiveOrder.vue";
import Proposals from "./components/Proposals.vue";
import BlogPage from "./components/Blog.vue";
import Dashboard from "./components/auth/Dashboard.vue";
import AccessDenied from "./components/AccessDenied.vue";
import P404 from "./components/404.vue";
import Settings from "./components/Settings.vue";

// import Login from "./components/Login.vue";
// import Register from "./components/Register.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import ResetPassword from "./components/ResetPassword.vue";

const project_name = "Stream Geeks";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    meta: { title: "Home | " + project_name }
  },

  {
    path: "/projects_by_category/:slug",
    component: ProjectsByCategoryPage,
    name: "projectsByCategory",
    meta: {
      requiresLogin: false,
      title: "Projects By Category  | " + project_name
    }
  },

  {
    path: "/projects",
    name: "projects",
    component: ProjectsPage,
    meta: {
      requiresLogin: false,
      title: "Projects | " + project_name
    }
  },

  {
    path: "/projects/:slug",
    name: "projectDetail",
    component: ProjectDetailPage,
    meta: { title: "Project Detail | " + project_name }
  },

  {
    path: "/projectadd",
    name: "projectadd",
    component: ProjectAddPage,
    meta: { title: "Project add | " + project_name }
  },
  {
    path: "/community",
    name: "community",
    component: CommunityPage,
    meta: { title: "Community | " + project_name }
  },
  {
    path: "/communityadd",
    name: "communityadd",
    component: CommunityAdd,
    meta: { title: "Community Add | " + project_name }
  },
  {
    path: "/gigs",
    name: "gigs",
    component: GigsPage,
    meta: { title: "Gigs | " + project_name }
  },
  {
    path: "/gig",
    name: "gig",
    component: Gig,
    meta: { title: "Gig | " + project_name }
  },
  {
    path: "/gigadd",
    name: "gigadd",
    component: GigAdd,
    meta: { title: "Gig Add | " + project_name }
  },
  {
    path: "/buyer",
    name: "buyer",
    component: Buyer,
    meta: { title: "Buyer | " + project_name }
  },
  {
    path: "/conversation",
    name: "conversation",
    component: Conversation,
    meta: { title: "Conversation | " + project_name }
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
    meta: { title: "Checkout | " + project_name }
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    meta: { title: "Order | " + project_name }
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
    meta: { requiresLogin: false, title: "Blog | " + project_name }
  },
  {
    path: "/education",
    name: "education",
    component: EducationPage,
    meta: { title: "Education | " + project_name }
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: UserProfile,
    meta: { title: "User Profile | " + project_name }
  },
  {
    path: "/allorder",
    name: "allorder",
    component: AllOrder,
    meta: { title: "AllOrder | " + project_name }
  },
  {
    path: "/activeorder",
    name: "activeorder",
    component: ActiveOrder,
    meta: { title: "ActiveOrder | " + project_name }
  },
  {
    path: "/proposals",
    name: "proposals",
    component: Proposals,
    meta: { title: "Proposals | " + project_name }
  },
  {
    path: "/forgot_password",
    name: "forgot_password",
    component: ForgotPassword,
    meta: {
      requiresLogin: false,
      title: "Forgot Password | " + project_name
    }
  },
  {
    path: "/resetpassword/:id",
    name: "resetpassword",
    component: ResetPassword,
    meta: {
      requiresLogin: false,
      title: "Reset Password | " + project_name
    }
  },
  {
    path: "/access-denied",
    name: "accessdenied",
    component: AccessDenied,
    meta: {
      title: "Access Denied | " + project_name
    }
  },
  {
    path: "/Settings",
    name: "Settings",
    component: Settings,
    meta: {
      title: "Settings | " + project_name
    }
  },

  // ============== Auth Routes START ==============
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresLogin: true,
      title: "Dashboard | " + project_name
    }
  }
  // ============== Auth Routes END ==============
];
