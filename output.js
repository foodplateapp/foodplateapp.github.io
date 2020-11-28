    //1.將div轉成svg  
    var data = "data:image/svg xml,"  
    "<svg xmlns='http://www.test.org/svg' width='200' height='200'>"  
    "<foreignObject width='100%' height='100%'>"  
    "<div xmlns='http://www.test.org/xhtml'> </div>"  
    "</foreignObject>"  
    "</svg>";  
    var img = new Image();  
    img.src = data;  
    document.getElementById('show_game').appendChild(img);  
  
  
    //2.svg轉成canvas  
    var canvas = document.createElement('canvas');  //準備空畫布  
    canvas.width = img.width;  
    canvas.height = img.height;  
  
    var context = canvas.getContext('2d');  //取得畫布的2d繪圖上下文  
    context.drawImage(img, 0, 0);  
  
     
     var a = document.createElement('a');  
     a.href = canvas.toDataURL('image/png');  //將畫布內的資訊匯出為png圖片資料  
     a.download = "MapByMathArtSys";  //設定下載名稱  

  
  
    //3. 圖片匯出為 png 格式  
    var type = 'png';  
    var imgData = canvas.toDataURL(type);  
  
        /**  
     * 獲取mimeType  
     * @param  {String} type the old mime-type  
     * @return the new mime-type  
     */  
    var _fixType = function (type) {  
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');  
        var r = type.match(/png|jpeg|bmp|gif/)[0];  
        return 'image/' r;  
    };  
  
    // 加工image data，替換mime type  
    imgData = imgData.replace(_fixType(type), 'image/octet-stream');  
  
  
  
    /**  
     * 在本地進行檔案儲存  
     * @param  {String} data     要儲存到本地的圖片資料  
     * @param  {String} filename 檔名  
     */  
    var saveFile = function (data, filename) {  
        var save_link = document.createElementNS('http://www.test.org/xhtml', 'a');  
        save_link.href = data;  
        save_link.download = filename;  
  
        var event = document.createEvent('MouseEvents');  
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);  
        save_link.dispatchEvent(event);  
    };  
  
    // 下載後的圖片名  
    var filename = 'LoveCrystal_' (new Date()).getTime() '.' type;  
    // download  
    saveFile(imgData, filename);  
  
  