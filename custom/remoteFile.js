/**
 * 远程数据
 */

function loadRemoteData(){
	
	// 考虑把数据存储到 storage
	let drawioConfig = $_drawio || {};

	for(let item in drawioConfig){
		let obj = drawioConfig[item];
		for(let pro in  obj){
			localStorage.setItem("drawio_" + item +"_" + pro, obj[pro].value)
		}
	}
	
	console.log(">>>>>", $_drawio)


}






