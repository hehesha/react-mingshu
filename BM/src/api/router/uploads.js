//上传图片，存放在uploadFile文件夹中，以上传文件的input.name+当前毫秒命名
//要求：前端html文件固定写法，app文件中的固定写法，新建uploadsFile文件夹放文件
//返回：重新命名的文件
exports.uploads=function(){

	//引入处理图片和文件（form-data）的multer模块
	var multer = require('multer');

	//设置文件路径和重命名
	var storage = multer.diskStorage({
		//设置上传后文件路径，uploads文件夹要手动创建。
		destination: function(req, file, cb) {
						//保存路径,相对主模块的路径
			cb(null, './router/uploadsFile')

		},
		//给上传文件重命名，获取添加后缀名
		filename: function(req, file, cb) {
			var fileFormat = (file.originalname).split(".");
			//给图片加上时间戳格式防止重名名
			//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
			var picName = file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1];
			cb(null, picName);
			//为了外面拿到当前文件名！！！！
			exports.picName = picName;
			console.log(picName)
		}
	});
	var upload = multer({
		storage: storage
	});
	
	
	return upload
}