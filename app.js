//引入express第三方模块，需要在该项目文件夹下安装npm install express,npm install jade --save
var express=require('express');
//引入path设置
var path=require('path');
// 创建express实例
var app=express();

//设置模板文件路径
app.set('views','./views');
//设置模板类型
app.set('view engine','jade');
//设置静态资源托管路径
app.use(express.static(path.join('src')));

//添加主页路由
app.get('/',function(req,res){
	res.render('./pages/index',{
		title:'Hello Jade',
		listTitle:'最近更新'
	})
})
//添加详情页面路由
app.get('/details',function(req,res){
	res.render('./pages/details',{
		title:'Hello Jade',
		listTitle:'文章详情'
	})
})
//添加新闻列表页面路由
app.get('/news',function(req,res){
	res.render('./pages/news',{
		title:'Hello Jade',
		listTitle:'最近热闻'
	})
})
//添加通知页面路由
app.get('/information',function(req,res){
	res.render('./pages/information',{
		title:'Hello Jade',
		listTitle:'最新通知'
	})
})
//添加推荐页面路由
app.get('/recommend',function(req,res){
	res.render('./pages/recommend',{
		title:'Hello Jade',
		listTitle:'最新推荐'
	})
})
//添加关于页面路由
app.get('/aboutMe',function(req,res){
	res.render('./pages/aboutMe',{
		title:'Hello Jade',
		listTitle:'关于项目'
	})
})
//添加登录页面路由
app.get('/login',function(req,res){
	res.render('./pages/login',{
		title:'Hello Jade',
	})
})
//添加登录页面路由
app.get('/test',function(req,res){
	res.render('./pages/test',{
		title:'Hello Jade',
	})
})
//添加注册页面路由
app.get('/register',function(req,res){
	res.render('./pages/register',{
		title:'Hello Jade',
	})
})
// 后台管理主页面
app.get('/admin',function(req,res){
	res.render('./admin/admin',{
		title:'Hello Jade',
		listTitle:'新闻后台管理系统'
	})
})
// 后台管理文章编辑页
app.get('/adminEdit',function(req,res){
	res.render('./admin/adminEdit',{
		title:'Hello Jade',
		listTitle:'新闻后台管理系统'
	})
})
//添加监听端口
app.listen(1234,function(){
	console.log('端口监听成功');
})