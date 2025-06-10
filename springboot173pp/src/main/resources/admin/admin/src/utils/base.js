const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot173pp/",
            name: "springboot173pp",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot173pp/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "酒店管理系统"
        } 
    }
}
export default base
