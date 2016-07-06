appindex.directive('area1',function(){
	return{
		restrict:'E',
		scope:{
            block:'=',
            area:'=',
            choice:'=',
            index:'=',
            show:'='
		},
		template:   '<li ondrop="drop(event,{{area.type}},{{block.id}},{{index}})"><input type="checkbox" class ="fnBtn" ng-model="chk" ng-click="changebtn(chk)"/><a><img src="images/角标@2x.png" class="newPng" ng-show="pngshow"><img ng-src="{{block.icon}}"><p ng-bind="block.text"></p></a></li>',
        replace:true,
        link:function(scope,elem,attr){
            scope.pngshow = false;
            scope.changebtn = function(chk){
                scope.pngshow = chk;
            }
            if(scope.block){
                if(!scope.block.icon)
                    scope.block.icon=''
                if(!scope.block.text)
                    scope.block.text ='请选择'
            }
            elem.find('a').blur(function(){
                elem[0].style.background = '#FFF';
            })
            elem.find('a').focus(function(){
                elem[0].style.background='rgba(213, 209, 209, 0.66)';
                scope.choice.type = scope.area.type;
                scope.choice.id = scope.block.id;
                if(scope.index!=='false')
                    scope.choice.index = scope.index;
                scope.show('area1');
            })
        }
	}
});

