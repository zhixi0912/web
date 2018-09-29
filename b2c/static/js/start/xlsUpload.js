/*
    上传excel代码逻辑
    example: new XlsUploadModule($('#importXls'));
*/

function XlsUploadModule($element){
    var $element = this.$element = $element;
    this.dataFileXls = $element.find('[data-fileXls]');
    this.dataFilexlslist = $element.find('[data-filexlslist]');
    this.dataImportExcel = $element.find('[data-importExcel]');
    this.dataFileXls = $element.find('[data-fileXls]');
    this.bind();
};

XlsUploadModule.prototype = {
    bind: function(){
        var _this = this;
        _this.importFileXls();
        _this.filexlslistDel();
        _this.excelOK();
        _this.filexlslistRemove();
    },
    importFileXls: function(){
        //excel导入选取文件操作
        var _this = this;
        this.dataFileXls.change(function(event){
            var len = _this.dataFilexlslist.find('li').length;
            var filename = fileChange(event)._filename; 
            if(len==1){
                _this.dataFilexlslist.find('li').remove();
            }
            var li = '<li><i class="fa fa-paperclip"></i> <strong>'+filename+'</strong> <span><a href="###" class="del"><i class="glyphicon glyphicon-remove-circle"></i></a></span></li>';
            _this.dataFilexlslist.append(li);
            if(filename==""){
                _this.dataFilexlslist.find('li').remove();
            }
        });
    },
    filexlslistDel: function(){
        //删除列表操作
        var _this = this;
        this.dataFilexlslist.on('click','.del',function(){
            $(this).parents('li').remove();
        });
    },
    excelOK: function(){
        //excel校验
        var _this = this;
        this.dataImportExcel.click(function(){
            var len = _this.dataFilexlslist.find('li').length;
            if(len != 1){
                adModal("Only be allowed to import a file.");
                return false;
            }
            var sourceStr = _this.dataFileXls.val();
            var FileListType="xlsx,xlsm,xltx,xltm,xlsb";
            var destStr = sourceStr.substring(sourceStr.lastIndexOf(".")+1,sourceStr.length)
            if(FileListType.indexOf(destStr) == -1){
                adModal("Only allowed to upload excel file");
                _this.dataFilexlslist.find('li').remove();
                return false;
            }
                return true;

        });
    },
    filexlslistRemove: function(){
        //重新点击时文件清空
        var _this = this;
        this.$element.on('show.bs.modal', function (e) {
            _this.dataFilexlslist.find('li').remove();
            $(this).find('input[data-fileXls]').val('');
            
        })
    }
}

/*获取input[file]的路径和文件名*/
function fileChange(e){

    var src=e.target || window.event.srcElement; //获取事件源，兼容chrome/IE
    //alert( src.value );
    //测试chrome浏览器、IE6，获取的文件名带有文件的path路径

    //下面把路径截取为文件名
    var file=src.value
    var filename = file.substring( file.lastIndexOf('\\')+1 ) ;

    //获取文件名的后缀名（文件格式）
    //alert( filename.substring( filename.lastIndexOf('.')+1 ) );

    return {
        _file: file,
        _filename: filename
    }

};