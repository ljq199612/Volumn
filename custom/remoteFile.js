/**
 * 远程数据
 */

function loadRemoteData(){
	
    //let usedSkin = localStorage.getItem("volumn-main-style");
    //if(undefined != usedSkin){
      //  loadStyle(usedSkin);
    //}
    
	let drawioConfig = $_drawio || {};
	for(let item in drawioConfig){
		let obj = drawioConfig[item];
		for(let pro in  obj){
			localStorage.setItem("drawio_" + item +"_" +pro, obj[pro])
		}
	}




}




