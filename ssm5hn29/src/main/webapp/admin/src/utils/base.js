const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm5hn29/",
            name: "ssm5hn29",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm5hn29/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "轻餐饮点餐APP—皮皮虾"
        } 
    }
}
export default base
