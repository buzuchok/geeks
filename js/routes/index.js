alert('resources/js/routes/index.js')

import HomePage from "../components/Home.vue";
import ProjectsByCategoryPage from "../components/ProjectsByCategory.vue";



import Projects from "../components/Projects.vue";
import ProjectDetail from "../components/ProjectDetail.vue";

import Blog from "../components/Blog.vue";
import BlogDetail from "../components/BlogDetail.vue";

import Ebook from "../components/Ebook.vue";
import EbookDetail from "../components/EbookDetail.vue";

import Community from "../components/Community.vue";
import CommunityDetail from "../components/CommunityDetail.vue";

import Education from "../components/Education.vue";
import Gigs from "../components/Gigs.vue";

import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import ForgotPassword from "../components/ForgotPassword.vue";
import ResetPassword from "../components/ResetPassword.vue";

import Dashboard from "../components/auth/Dashboard.vue";
import Bookmarks from "../components/auth/Bookmarks.vue";
import Likes from "../components/auth/Likes.vue";

import ProjectList from "../components/auth/ProjectList.vue";
import ProjectAdd from "../components/auth/ProjectAdd.vue";
import ProjectEdit from "../components/auth/ProjectEdit.vue";

import Profile from "../components/auth/Profile.vue";
import UserProfile from "../components/UserProfile.vue";

import QuestionList from "../components/auth/QuestionList.vue";
import QuestionAdd from "../components/auth/QuestionAdd.vue";
import QuestionEdit from "../components/auth/QuestionEdit.vue";

import NotFound from "../components/404.vue";
import LinkedinCallback from "../components/LinkedinCallback.vue";
import Test from "../components/Test.vue";

const project_name = "Stream Geeks";

export const routes=[
/*
    {
        path : '/',
        component : Home,
        name : 'HomePage',
    },
*/
    {
        path: "/",
        name: "home",
        component: HomePage,
        meta: { title: "Home | " + project_name }
    },

    // ProjectsByCategoryPage
    {
        path: '/projects_by_category/:slug',
        component: ProjectsByCategoryPage,
        name: 'projectsByCategory',
        meta: { requiresLogin: false, title: "Projects By Category  | " + project_name }
    },
/*         {
            path: "/projects_by_category/:slug",
            name: "projectsByCategory",
            component: ProjectsByCategory,
            meta: { requiresLogin: false, title: "Projects By Category  | " + project_name }

            // meta: { title: "Projects By Category | " + project_name }
        },
 */
// COMMON PAGES BLOCK END

]
/*
export default {
    mode: "history",

    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            meta: { title: "Home | " + project_name }
        },
        {
            path: "/vtest",
            name: "test",
            component: Test,
            meta: { title: "VTest | " + project_name }
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects,
            meta: { requiresLogin: false, title: "Projects | " + project_name }
        },

        {
            path: "/projects/:slug",
            name: "projectDetail",
            component: ProjectDetail,
            meta: { title: "Project Detail | " + project_name }
        },

        {
            path: "/projects_by_category/:slug",
            name: "projectsByCategory",
            component: ProjectsByCategory,
            meta: { requiresLogin: false, title: "Projects By Category  | " + project_name }

            // meta: { title: "Projects By Category | " + project_name }
        },
        {
            path: "/userprofile/:id",
            name: "userprofile",
            component: UserProfile,
            meta: { title: "User Profile | " + project_name }
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog,
            meta: { title: "Education | Blog | " + project_name }
        },
        {
            path: "/blog/:id",
            name: "blogdetail",
            component: BlogDetail,
            meta: { title: "Education | Blog | " + project_name }
        },
        {
            path: "/ebook",
            name: "ebook",
            component: Ebook,
            meta: { title: "Education | Ebook | " + project_name }
        },
        {
            path: "/ebook/:id",
            name: "ebookdetail",
            component: EbookDetail,
            meta: { title: "Education | Ebook | " + project_name }
        },
        {
            path: "/community",
            name: "community",
            component: Community,
            meta: { title: "Community | " + project_name }
        },
        {
            path: "/community/:id",
            name: "communitydetail",
            component: CommunityDetail,
            meta: { title: "Community | " + project_name }
        },
        {
            path: "/gigs",
            name: "gigs",
            component: Gigs,
            meta: { title: "Gigs | " + project_name }
        },
        {
            path: "/education",
            name: "education",
            component: Education,
            meta: { title: "Education | " + project_name }
        },
        {
            path: "/login/:emailstatus?",
            name: "login",
            component: Login,
            meta: { title: "Login | " + project_name }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: { title: "Register | " + project_name }
        },
        {
            path: "/forgot_password",
            name: "forgot_password",
            component: ForgotPassword,
            meta: { title: "Forgot Password | " + project_name }
        },
        {
            path: "/resetpassword/:id",
            name: "resetpassword",
            component: ResetPassword,
            meta: { title: "Reset Password | " + project_name }
        },
        {
            path: "/linkedin_callback",
            name: "linkedin_callback",
            component: LinkedinCallback,
            meta: { title: "Linkedin | " + project_name }
        },

        // ============== Auth Routes ==============
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: { requiresLogin: true, title: "Dashboard | " + project_name }
        },
        {
            path: "/bookmarks",
            name: "bookmarks",
            component: Bookmarks,
            meta: { requiresLogin: true, title: "Bookmarks | " + project_name }
        },
        {
            path: "/likes",
            name: "likes",
            component: Likes,
            meta: { requiresLogin: true, title: "Likes | " + project_name }
        },
        {
            path: "/questionlist",
            name: "questionlist",
            component: QuestionList,
            meta: {
                requiresLogin: true,
                title: "Manage Questions | " + project_name
            }
        },
        {
            path: "/questionadd",
            name: "questionadd",
            component: QuestionAdd,
            meta: {
                requiresLogin: true,
                title: "Post a Question | " + project_name
            }
        },
        {
            path: "/questionedit/:id",
            name: "questionedit",
            component: QuestionEdit,
            meta: {
                requiresLogin: true,
                title: "Edit Question | " + project_name
            }
        },
        {
            path: "/projectlist",
            name: "projectlist",
            component: ProjectList,
            meta: {
                requiresLogin: true,
                title: "Manage Projects | " + project_name
            }
        },
        {
            path: "/projectadd",
            name: "projectadd",
            component: ProjectAdd,
            meta: {
                requiresLogin: true,
                title: "Post a Project | " + project_name
            }
        },
        {
            path: "/projectedit/:id",
            name: "projectedit",
            component: ProjectEdit,
            meta: {
                requiresLogin: true,
                title: "Edit Project | " + project_name
            }
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile,
            meta: { requiresLogin: true, title: "Profile | " + project_name }
        },
        {
            path: "*",
            name: "404",
            component: NotFound,
            meta: { title: "Page Not Found | " + project_name }
        }
    ],
    scrollBehavior() {
        return { x: 0, y: 0 };
    }
};
*/
