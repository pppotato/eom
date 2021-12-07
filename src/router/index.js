import VueRouter from "vue-router";
import FirstLevel from "../components/FirstLevel";
import SecondLevel from "../components/SecondLevel";
import ThirdLevel from "../components/ThirdLevel";
import Start from "../components/Start";

const router=new VueRouter({
    routes:[
        {
            path:"/",
            component:Start
        },
        {
          path:"/firstLevel",
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