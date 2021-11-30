import VueRouter from "vue-router";
import FirstLevel from "../components/FirstLevel";
import SecondLevel from "../components/SecondLevel";
import ThirdLevel from "../components/ThirdLevel";

const router=new VueRouter({
    routes:[
        {
            path:"/",
            component:FirstLevel
        },
        {
            path:"/secondLevel",
            component:SecondLevel
        },
        {
            path:"/thirdLevel",
            component:ThirdLevel
        }
    ]
})
export default router