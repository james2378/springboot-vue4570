
var projectName = '酒店管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '客房服务',
	url: './pages/kefangfuwu/list.html'
}, 
{
	name: '客房信息',
	url: './pages/kefangxinxi/list.html'
}, 

{
	name: '酒店公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/springboot173pp/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客房类型","menuJump":"列表","tableName":"kefangleixing"}],"menu":"客房类型管理"},{"child":[{"buttons":["新增","查看","修改","删除","预约"],"menu":"客房服务","menuJump":"列表","tableName":"kefangfuwu"}],"menu":"客房服务管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"客房信息","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息管理"},{"child":[{"buttons":["查看","修改","删除","报表","入住","审核"],"menu":"客房预订","menuJump":"列表","tableName":"kefangyuding"}],"menu":"客房预订管理"},{"child":[{"buttons":["查看","修改","删除","退房"],"menu":"入住登记","menuJump":"列表","tableName":"ruzhudengji"}],"menu":"入住登记管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"服务费用","menuJump":"列表","tableName":"fuwufeiyong"}],"menu":"服务费用管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"退房登记","menuJump":"列表","tableName":"tuifangdengji"}],"menu":"退房登记管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"酒店公告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"客房服务列表","menuJump":"列表","tableName":"kefangfuwu"}],"menu":"客房服务模块"},{"child":[{"buttons":["查看","查看评论","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","修改","删除","支付"],"menu":"客房预订","menuJump":"列表","tableName":"kefangyuding"}],"menu":"客房预订管理"},{"child":[{"buttons":["查看","支付"],"menu":"入住登记","menuJump":"列表","tableName":"ruzhudengji"}],"menu":"入住登记管理"},{"child":[{"buttons":["查看","支付"],"menu":"服务费用","menuJump":"列表","tableName":"fuwufeiyong"}],"menu":"服务费用管理"},{"child":[{"buttons":["查看"],"menu":"退房登记","menuJump":"列表","tableName":"tuifangdengji"}],"menu":"退房登记管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"客房服务列表","menuJump":"列表","tableName":"kefangfuwu"}],"menu":"客房服务模块"},{"child":[{"buttons":["查看","查看评论","预订"],"menu":"客房信息列表","menuJump":"列表","tableName":"kefangxinxi"}],"menu":"客房信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
