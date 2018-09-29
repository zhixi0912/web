/*
    checkbox,radio浮动框列表展示通用逻辑代码；
    example: modallistmain('测试', testdata, 'checkbox', function(){
                $('[data-btn-id="modalSubmit"]').click(function(){
                    alert();
                });
            });
*/

var ModalList = (function(){
    
    
    
    var ModalListMain = {
        newDom: function(){
            var _this = this;
            var domHtml = '<div class="modal fade" id="modalListModal">'
                            +'<div class="modal-dialog" role="document">'
                                +'<div class="modal-content">'
                                  +'<div class="modal-header">'
                                    +'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'
                                    +'<h4 class="modal-title" id="myModalLabel"></h4>'
                                  +'</div>'
                                  +'<div class="modal-body">'
                                      +'<div class="row manSector" id="manSector">'
                                        +'<div class="col-sm-12" data-id="manSectorMain">'
                                            +'<ul id="modalList"></ul>'
                                        +'</div>'
                                    +'</div>'
                                  +'</div>'
                                  +'<div class="modal-footer">'
                                    +'<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'
                                    +'<button type="button" class="btn btn-primary" data-btn-id="modalSubmit">确定</button>'
                                  +'</div>'
                                +'</div>'
                              +'</div>'
                            +'</div>'; 
            $('body').append(domHtml);
            return _this;
        },
        addDataFn: function(text, data, type){
            var _this = this;
            _this.text = text;
            _this.data = data;
            _this.type = type;
            $('#myModalLabel').text(_this.text);
            var len = _this.data.length;
            for(var i=0; i<len; i++){
                var li = '<li><label><span><input id='+_this.data[i].id+' value='+_this.data[i].name+' name="manmodlist" type='+_this.type+' /></span><section><h5>'+_this.data[i].name+'</h5></section></label></li>'
                $('#modalList').append(li);
            }        
        },
        modalShow: function(){
            var _this = this;
            $('#modalListModal').modal('show');
            return _this;
        },
        modalHide: function(){
            var _this = this;
            $('#modalListModal').modal('hide');
        },
        destroy: function(){
            var _this = this;
            $('#modalListModal').remove();
        }
    }
    
    return function(text, data, type, callback){  
        var getModalListInputData = function getModalListInputData(){
        var inputData = [];
        var $input = $('#modalList li input:checked');
        for(var i=0; i<$input.length; i++){
                var id = $input.eq(i).attr('id'),
                    value = $input.eq(i).attr('value');
                inputData.push({id: id, value: value});
            }
            $('#modalListModal').modal('hide');
            console.log('inputData: ' + inputData);
            return inputData;
        }
        
        ModalListMain.newDom().modalShow().addDataFn(text, data, type);    
        $('[data-btn-id="modalSubmit"]').click(function(){
            data = getModalListInputData();
            callback.call(null, data);
        });        
        $('#modalListModal').on('hidden.bs.modal', function () {
            ModalListMain.destroy();
        }) 
    }           
    
})();