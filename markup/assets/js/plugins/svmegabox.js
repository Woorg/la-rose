/* **** sV Libraly v1.0  **** */
/* **** Libraly Jquery 1.8.3 **** */
/* ** Developer Sergey Vorobyev ** */
/* E-mail workbiznet@gmail.com */
/* **************************** */


/* --sVmegaBox-- */
(function( $ ){
  /* Private options */
  var sVmegaBox = {
      ArrEffect: new Array('show','hide','fadeIn','fadeOut','slideUp','slideDown'),
      classModBox:'sv-modbox',
      classLink:'sv-modlink',
      hideContent:'sv-modbox-hide',
      idMask:'sv-mask-box-overlay',
      classLoadMask:'loading',
      idContainer:'sv-container'
  };
  $.extend({
    Message:function(option){
      $('body').sVmegaBox('Message',option);
    },
    MaskShow:function(option){
      $('body').sVmegaBox('MaskShow',option);
    },
    Alert:function(option){
      $('body').sVmegaBox('Alert',option);
    },
    Confirm:function(option){
      $('body').sVmegaBox('Confirm',option);
    },
    Prompt:function(option){
      $('body').sVmegaBox('Prompt',option);
    },
    Closed:function(option){
      $('body').sVmegaBox('Closed',option);
    },
    AjaxContent:function(option){
      $('body').sVmegaBox('AjaxContent',option);
    }
  });
  /* Public methods */
  var methods = {
        /*метод для создания маски*/
        init:function(option,statContent){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            /*создаем маску*/
            if(!$('#'+sVmegaBox.idMask).length){
              methods.MaskCreate(option);
              methods.MaskStyle(option);
              /*обработка клика по маске */
                if(option.ClickCloseMask){
                	$('#'+sVmegaBox.idMask).click(function() {
                		methods.Closed(option);
            		});
            	}
            }
            if(statContent){
                /* обработка скрытого контента */
                var hideContent = $('.'+sVmegaBox.hideContent);
                if(hideContent.length && hideContent.attr('data-plugin') != "on"){
                  hideContent.each(function(){
                    methods.Modificate($(this),option);
                    $(this).attr('data-plugin','on').attr('data-content','static').attr('data-power','off').addClass(sVmegaBox.classModBox);
                  })
                }
            }
        },
        /*метод для создания маски*/
        MaskCreate:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            /*создаем маску*/
            $('body').append('<div id="' + sVmegaBox.idMask + '"></div>');
            if(option.loadClass)$('#'+sVmegaBox.idMask).addClass(sVmegaBox.classLoadMask);
        },
        /*метод для стилизации маски*/
        MaskStyle:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            /*стилизуем маску*/
            if(!option.cssCustomMask == ''){
               $('#'+sVmegaBox.idMask).css(option.cssCustomMask);
            }else{
               $('#'+sVmegaBox.idMask).css({
                	'background-color': option.bgColorMask,
            		'filter': 'alpha(opacity='+option.opacityMask*100+')',
            		'-moz-opacity': option.opacityMask,
            		'opacity': option.opacityMask,
            		'z-index': option.zIndexMask,
            		'zoom': 1,
            		'position': option.cssPositionMask,
            		'top': 0,
            		'left': 0,
            		'width': '100%',
            		'height': '100%',
                    'display':'none'
        	    });
            }
        },
        /*метод для показа маски*/
        MaskShow:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            /*стилизуем маску*/
            methods.MaskStyle(option);
            /*показываем маску в зависимости от эффекта*/
            var time=(option.effectTimeShowMask == '')?option.generalTimeEffect:option.effectTimeShowMask;
            methods.EffectHandler($('#'+sVmegaBox.idMask),option.effectShowMask,time,option.callBackShowMask);
        },
        /*метод для скрытия маски*/
        MaskClose:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,{},option);
            var time =(option.effectTimeCloseMask == '')?option.generalTimeEffect:option.effectTimeCloseMask;
            methods.EffectHandler($('#'+sVmegaBox.idMask),option.effectCloseMask,time,function(){
                  $('#'+sVmegaBox.idMask).addClass(sVmegaBox.classLoadMask);
                  /*функция обратного вызова*/
                  option.callBackCloseMask();
                }
            );
        },
        /*метод для скрытия модального окна*/
        ModClose:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            var obj = $('.'+sVmegaBox.classModBox+'[data-power=on]');
            var time =(option.effectTimeCloseModBox == '')?option.generalTimeEffect:option.effectTimeCloseModBox;
            methods.EffectHandler(obj,option.effectCloseModBox,time,function(){
                 if(obj.attr('data-content') != 'static') {
                    obj.remove();
                  }else{
                    obj.removeAttr('style');
                    obj.addClass(sVmegaBox.hideContent);
                    obj.removeClass(sVmegaBox.classModBox+'-show');
                    obj.attr('data-power','off');
                  }
                  option.callBackCloseModBox(obj);
             });
        },
        /*метод для скрытия модального окна и маски*/
        Closed:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            methods.MaskClose(option);
            methods.ModClose(option);
        },
        /*метод для создания структуры модального окна*/
        ModCreate:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option),
            content = (!option.IncludeContent == '')?option.IncludeContent.html():option.text,
            html = '<div id="'+sVmegaBox.idContainer+'" class="'+sVmegaBox.classModBox+'">';
            if(option.closeLink){
                /*создаем ссылку для закрытия модального окна и навешиваем обработчик на нее*/
                html +='<div class="'+sVmegaBox.classModBox+'-'+option.closeLinkClass+'" title="'+option.closeLinkTitle+'"></div>';
            }
            if(option.type == "tooltip"){
                /*создаем ссылку для закрытия модального окна и навешиваем обработчик на нее*/
                html +='<div class="'+sVmegaBox.classModBox+'-triangle"></div>';
            }
            html +='<div class="'+sVmegaBox.classModBox+'-wrap">';
            if(option.title != ''){
              /*создаем заголовок модального окна*/
              html +='<div class="'+sVmegaBox.classModBox+'-header">'+option.title+'</div>';
              //console.log('title');
            }
            html +='<div class="'+sVmegaBox.classModBox+'-content">'+content+'</div>';
            if(option.ModBoxFooter != ''){
              /*создаем футер модального окна*/
              html +='<div class="'+sVmegaBox.classModBox+'-footer">'+option.ModBoxFooter+'</div>';
            }
            html +='</div></div>';
            $('body').append(html);
            if(option.closeLink){
                /*навешиваем событие на ссылку для закрытия модального окна*/
                $('#'+sVmegaBox.idContainer).find('.'+sVmegaBox.classModBox+'-'+option.closeLinkClass).click(function() {
                    methods.Closed(option);
                });
            }
            if(option.ModBoxFooter != ''){
              option.ModBoxFooterFunc($('#'+sVmegaBox.idContainer));
            }
            if(option.addClass != ''){
              /*добавляем пользовательский класс модальному окну*/
              $('#'+sVmegaBox.idContainer).addClass(option.addClass);
            }
            if(option.type != ''){$('#'+sVmegaBox.idContainer).addClass(option.type);}
            if(option.title == '' && option.ModBoxFooter == '' && option.closeLink){
              $('#'+sVmegaBox.idContainer).find('.'+sVmegaBox.classModBox+'-'+option.closeLinkClass).addClass('one');
            }
            /* возвращаем модальное окно*/
            return $('#'+sVmegaBox.idContainer);
        },
        /*метод для модификации контента для модального окна*/
        Modificate:function(element,option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            element.addClass(sVmegaBox.classModBox);
            element.wrapInner('<div class="'+sVmegaBox.classModBox+'-wrap"/>');
            element.find('.'+sVmegaBox.classModBox+'-wrap').wrapInner('<div class="'+sVmegaBox.classModBox+'-content"/>');
            var title = "";
            if(element.data('title')) title = element.data('title');
            if(option.title != "") title = option.title;
            if(title != ''){
              /*создаем заголовок модального окна*/
              element.find('.'+sVmegaBox.classModBox+'-wrap').prepend('<div class="'+sVmegaBox.classModBox+'-header">'+title+'</div>');
            }
            if(option.closeLink){
                /*создаем ссылку для закрытия модального окна и навешиваем обработчик на нее*/
                element.prepend('<div class="'+sVmegaBox.classModBox+'-'+option.closeLinkClass+'" title="'+option.closeLinkTitle+'"></div>');
                /*навешиваем событие на ссылку для закрытия модального окна*/
                element.find('.'+sVmegaBox.classModBox+'-'+option.closeLinkClass).click(function() {
                    methods.Closed(option);
                });
            }
            if(option.type == "tooltip"){
                element.prepend('<div class="'+sVmegaBox.classModBox+'-triangle"></div>');
            }
            if(option.ModBoxFooter != ''){
              /*создаем футер модального окна*/
              element.find('.'+sVmegaBox.classModBox+'-wrap').append('<div class="'+sVmegaBox.classModBox+'-footer">'+option.ModBoxFooter+'</div>');
              option.ModBoxFooterFunc(element);
            }
            if(option.addClass != ''){
              /*добавляем пользовательский класс модальному окну*/
              element.addClass(option.addClass);
            }
            if(element.data('add-class') != ''){
              /*добавляем пользовательский класс модальному окну*/
              element.addClass(element.data('add-class'));
            }
            if(option.type != ''){element.addClass(option.type);}
            if(option.title == '' && option.ModBoxFooter == '' && option.closeLink){
              element.find('.'+sVmegaBox.classModBox+'-'+option.closeLinkClass).addClass('one');
            }
            /* возвращаем модальное окно*/
            return element;
        },
        /*метод для показа модального окна*/
        Show:function(element,option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            /*показываем модальное окно в зависимости от эффекта*/
            var time =(option.effectTimeShowModBox == '')?option.generalTimeEffect:option.effectTimeShowModBox;
            methods.EffectHandler(element,option.effectShowModBox,time,function(){
                  $('#'+sVmegaBox.idMask).removeClass(sVmegaBox.classLoadMask);
                  if(element.hasClass(sVmegaBox.hideContent)){
                      element.removeClass(sVmegaBox.hideContent);
                  }
                  element.addClass(sVmegaBox.classModBox+'-show')
                  element.attr('data-power','on');
                  /*функция обратного вызова*/
                  option.callBackAfter(element);
            });
            return element;
        },
        /*метод для показа модального окна по клику*/
        clickHand:function(option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
              methods.init(option,true);
              return this.each(function(){
            	    $(this).click(function(e) {
                          /*отменяем привычное поведение модальной ссылки, если она является html-ссылкой*/
                          e.preventDefault();

                          /*определяем содержимое модального окна*/
                          var LinkModAttr; /*значение аттрибута  модальной ссылки*/
                          var idContent; /*переменная для контента модального окна*/
                          if(!option.IncludeContent == ''){
                            idContent = option.IncludeContent;
                          }else if($(this).attr(option.attrLinkMod)){
                             /*получаем id контента, который хотим показать в модальном окне*/
                             LinkModAttr = $(this).attr(option.attrLinkMod);
                             /*получаем объект, который хотим показать в модальном окне*/
                             idContent = $(LinkModAttr);
                          }else{
                             idContent = "undefined";
                          }
                          if(idContent != "undefined"){
                                option.callBackBeforeClick($(this),idContent);
                                /*показываем маску*/
                                if(option.ShowMask){
                                   methods.MaskShow(option);
                                }
                                /* стилизуем modbox */
                                methods.BoxStyle(idContent,option);
                                /* позиционируем modbox */
                                methods.BoxPosition(idContent,$(this),option);
                                /* прячем modbox для дальнейшего показа */
                                idContent.css('display','none');
                                /* показываем modbox */
                                methods.Show(idContent,option);
                                /* обеспечиваем адаптивность modbox */
                                if(option.scale) methods.Scale(idContent,$(this),option);
                                if(option.drag) methods.Drag(idContent,option);
                                if(option.unselect) idContent.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
                          }else{
                            var error_link_object = ($(this).attr('class'))?'.'+$(this).attr('class'):'#'.$(this).attr('id');
                            console.log('ОШИБКА - При клике по $('+error_link_object+') не найден контент для вывода!');
                          }

                      });

                });
        },
        /* метод создания сообщения */
        Message:function(option){
             var option = $.extend({},$.fn.sVmegaBox.defaults,{generalTimeEffect:0,width:'400',closed:true},option),
             container = methods.ModCreate(option).addClass(sVmegaBox.hideContent).attr('data-plugin','on').attr('data-content','dinamic');

             option.callBackBefore(container);
             console.log(option);
             methods.init(option,false);
             if(option.unselect) container.attr('unselectable', 'on').css('user-select', 'none').on('selectstart', false);
             if(option.closed) methods.Closed(option);
             /*показываем маску*/
              if(option.ShowMask){methods.MaskShow(option)}
              /* стилизуем modbox */
              methods.BoxStyle(container,option);
              /* позиционируем modbox */
              methods.BoxPosition(container,'',option);
              /* обеспечиваем адаптивность modbox */
              if(option.scale){
                 methods.Scale(container,'',option);
              }
              /* прячем modbox для дальнейшего показа */
              container.css('display','none');
              /* показываем modbox */
              methods.Show(container,option);
              if(option.drag) methods.Drag(container,option);
              return container;
        },
        /* метод для масштабирования modbox */
        Scale:function(element,elementLink,option){
             $(window).resize(function(){
                /* позиционируем modbox */
                element.css('height','auto');
                element.find('.'+sVmegaBox.classModBox+'-wrap').removeAttr('style')
                element.find('.'+sVmegaBox.classModBox+'-content').removeAttr('style')
                methods.BoxPosition(element,elementLink,option);
              });
        },
        /* метод перетаскивания modbox */
        Drag:function(element,option){
              var drag = 0,x1,x2,y1,y2;
              element.addClass('drag');
              function start_dragging(event){
                  drag=1;x2=event.clientX;y2=event.clientY;
                  var position_x =element.offset().left;
                  var position_y =element.offset().top;
                  element.css({'margin':0,'left':position_x,'top':position_y});
              }
              function dragging(event){
                  // проверяем началось ли перетаскивание
                  if (drag==1){
                      x1=event.clientX;y1=event.clientY;shift_x=x1-x2;shift_y=y1-y2;
                      var left = element.offset().left +shift_x;
                      var top = element.offset().top+shift_y;
                      element.css({'left':left,'top':top});
                      x2=x1; y2=y1;
                  }
              }
              function draggingKey(step,mode,key){
                  var left = element.offset().left;
                  var top = element.offset().top;
                  element.css({'margin':0,'left':left,'top':top});
                  if(mode='vertical'){
                    if(key == 38) top -= step;
                    if(key == 40) top += step;
                    element.css({'top':top});
                  }
                  if(mode='gorizontal'){
                    if(key == 37) left -= step;
                    if(key == 39) left += step;
                    element.css({'left':left});
                  }
              }
              function stop_dragging(){drag=0;}

              element.on('mousedown',function(){start_dragging(event)});
              element.on('mousemove',function(){dragging(event)});
              element.on('mouseup',function(){stop_dragging()});
              var shiftControl = false;
              $(document).keyup(function(e) {shiftControl = false;});
              $(document).keydown(function(e) {if (e.which === option.keyCodePress) {shiftControl = e.which;}});
              $(document).keydown(function(e) {
                if(shiftControl === option.keyCodePress){
                    if (e.which === 37) { /* влево */  draggingKey(1,'gorizontal',e.which)}
				    if (e.which === 39) { /* вправо */ draggingKey(1,'gorizontal',e.which)}
				    if (e.which === 38) { /* вверх */  draggingKey(1,'vertical',e.which)}
				    if (e.which === 40) { /* вниз */   draggingKey(1,'vertical',e.which)}
                }

			});
        },
        /* метод создания стилизованного alert */
        AjaxContent:function(option){
          var option = $.extend({},$.fn.sVmegaBox.defaults,{
              addClass:'ajax-content',
              url:'ajax.php',
              type:'POST',
              callBackError:function(data){},
              callBackSuccess:function(data){},
          },option);
          $.ajax({
            type: option.type,
            url: option.url,
            error: function (data){
              var options = $.extend({},option,{text:'Ошибка при загрузке контента'});
              methods.Alert(options);
              option.callBackError(data);
            },
            success: function (data){
              var options = $.extend({},option,{text:data});
              methods.Message(options);
              option.callBackSuccess(data);
            }
          });

        },
        /* метод создания стилизованного alert */
        Alert:function(option){
          var option = $.extend({},$.fn.sVmegaBox.defaults,{
              addClass:'alert',
              ModBoxFooter:'<button class="'+sVmegaBox.classModBox+'-button-ok"><span>Ok</span></button>',
              ModBoxFooterFunc:function(element){
                element.find('.'+sVmegaBox.classModBox+'-button-ok').click(function() {
                  methods.Closed(option);
                  option.okUserFunc($(this));
                });
              },
              okUserFunc:function(e){}
          },option);
          var container = methods.Message(option);
          option.callBackBefore(container);
        },
        /* метод создания стилизованного Confirm */
        Confirm:function(option){
          var option = $.extend({},$.fn.sVmegaBox.defaults,{
              addClass:'confirm',
              ModBoxFooter:'<button class="'+sVmegaBox.classModBox+'-button-ok"><span>Ok</span></button><button class="'+sVmegaBox.classModBox+'-button-no"><span>Отмена</span></button>',
              ModBoxFooterFunc:function(element){
                element.find('.'+sVmegaBox.classModBox+'-button-ok').click(function() {
                  methods.Closed(option);
                  option.okUserFunc($(this));
                });
                element.find('.'+sVmegaBox.classModBox+'-button-no').click(function() {
                  methods.Closed(option);
                  option.noUserFunc($(this));
                });
              },
              okUserFunc:function(e){},
              noUserFunc:function(e){}
          },option);
          methods.Message(option);
        },
        /* метод создания стилизованного prompt */
        Prompt:function(option){
          var option = $.extend({},$.fn.sVmegaBox.defaults,{
              addClass:'prompt',
              ModBoxFooter:'<div id="promt-otvet"><input type="text"/></div><button class="'+sVmegaBox.classModBox+'-button-ok"><span>Ok</span></button>',
              answer:function(text){}
          },option);
          var container = methods.Message(option);
          container.find('.'+sVmegaBox.classModBox+'-button-ok').click(function() {
            var value = $(this).siblings().find('input').val();
            methods.Closed(option);
            setTimeout(function(){option.answer(value)},300);
          });
        },
        /*метод - позиционирования */
        BoxPosition:function(element,elementLink,option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);

            /*ширина окна браузера*/
            var WinWidth = $(window).width();
            /*высота окна браузера */
    		var WinHeight = $(window).height();
            /*высота модального окна*/
    		var modWinHeight = element.outerHeight();
            /*ширина модального окна*/
    		var modWinWidth = element.outerWidth();
            /*отступ модального окна сверху*/
    		var modWinMTop = modWinHeight/2;
            /*отступ модального окна слева*/
    		var modWinMLeft = modWinWidth/2;

            switch (option.modePosition) {
                case 'center':
                    element.css({
                       'margin-top':'-'+modWinMTop + 'px',
                       'margin-left':'-'+modWinMLeft + 'px',
                       'top':option.cssPositionTop,
                       'left':option.cssPositionLeft
                     });
                     console.log('center');
                     break
                case 'thisLink':
                    /*высота модальной ссылки*/
            		var modLinkHeight = elementLink.outerHeight();
                    /*ширина модальной ссылки*/
            		var modLinkWidth = elementLink.outerWidth();
                    /*позиция сверху модального окна*/
                    var modOffTop = elementLink.offset().top;
                    /* позиция слева модального окна*/
                    var modOffLeft = elementLink.offset().left;
                    /*позиция справа модального окна*/
                    var modOffRight = parseInt(WinWidth - (modOffLeft + modLinkWidth));
                    /*позиция  модального окна сверху с учетом высоты модальной ссылки*/
                    var modTop = parseInt(modOffTop + modLinkHeight);
                    /* ширина видимой области по горизонтали */
                    var rangeVisible = parseInt(WinWidth - modOffLeft);

                    element.removeClass('left');
                    element.removeClass('right');

                    if(rangeVisible < modWinWidth){
                         element.css({
                           'position':'absolute',
                           'top':modTop + 'px',
                           'right':modOffRight + 'px',
                           'z-index': option.zIndexModBox
                         });
                         element.addClass('right');
                    }else{
                        element.css({
                          'position':'absolute',
                          'top':modTop + 'px',
                          'left':modOffLeft + 'px',
                          'z-index': option.zIndexModBox
                        });
                        element.addClass('left');
                    }
                    //console.log('thisLink');
                    break
                case 'top middle':
                    element.css({
                        'top':option.modePositionVal,
                        'margin-left':'-'+modWinMLeft + 'px',
                        'left':option.cssPositionLeft
                    });
                    //console.log('top middle');
                    break
                case 'top left':
                    element.css({
                        'top':option.modePositionVal,
                        'left':option.modePositionVal
                    });
                    //console.log('top left');
                    break
                case 'top right':
                    element.css({
                        'top':option.modePositionVal,
                        'right':option.modePositionVal
                    });
                    //console.log('top right');
                    break
                case 'middle left':
                    element.css({
                        'left':option.modePositionVal,
                        'margin-top':'-'+modWinMTop + 'px',
                        'top':option.cssPositionTop
                    });
                    //console.log('middle left');
                    break
                case 'middle right':
                    element.css({
                        'margin-top':'-'+modWinMTop + 'px',
                        'top':option.cssPositionTop,
                        'right':option.modePositionVal
                    });
                    //console.log('middle right');
                    break
                case 'bottom middle':
                    element.css({
                        'bottom':option.modePositionVal,
                        'margin-left':'-'+modWinMLeft + 'px',
                        'left':option.cssPositionLeft
                    });
                    //console.log('bottom middle');
                    break
                case 'bottom left':
                    element.css({
                        'bottom':option.modePositionVal,
                        'left':option.modePositionVal
                    });
                    //console.log('bottom left');
                    break
                case 'bottom right':
                    element.css({
                        'bottom':option.modePositionVal,
                        'right':option.modePositionVal
                    });
                    //console.log('bottom right');
                    break
            }

            /* если размера окна не хватает для вывода контента */
            if(modWinHeight>WinHeight){
              var titleH = 0,
                footerH = 0,
                paddingT = parseInt(element.find('.'+sVmegaBox.classModBox+'-content').css('padding-top')),
                paddingB = parseInt(element.find('.'+sVmegaBox.classModBox+'-content').css('padding-bottom'));
             if(option.title != '' || element.data('title')){
                titleH = parseInt(element.find('.'+sVmegaBox.classModBox+'-header').outerHeight());
                element.find('.'+sVmegaBox.classModBox+'-header').css({
                    'height':titleH + 'px'
                });
              }
              if(option.ModBoxFooter != ''){
                  if(modWinHeight>WinHeight){
                      element.find('.'+sVmegaBox.classModBox+'-footer').css({
                          'padding':'10px 20px 10px 20px'
                      });
                  }
                  footerH = parseInt(element.find('.'+sVmegaBox.classModBox+'-footer').outerHeight());
                  element.find('.'+sVmegaBox.classModBox+'-footer').css({
                      'height':footerH + 'px'
                  });
              }
              element.addClass('off-box-auto');
              var maxH = parseInt(WinHeight-(parseInt(option.modePositionVal)*2));
              var maxHcontent = parseInt(maxH-(titleH+footerH));
              element.find('.'+sVmegaBox.classModBox+'-content').css({'height':maxHcontent+'px'});
              element.css({'top':option.modePositionVal,'margin-top':0,'height':maxH+'px'});
              element.find('.'+sVmegaBox.classModBox+'-wrap').css({'height':maxH+'px'});

            }
        },
        /*метод - стилизации*/
        BoxStyle:function(element,option){
            var option = $.extend({},$.fn.sVmegaBox.defaults,option);
            if(!option.cssCustom == ''){
                element.css(option.cssCustom);
            }else{
                if(option.width != ''){
                    element.css({
                        'width':option.width+'px'
                    });
                }
                if(option.align != ''){
                    element.find('.'+sVmegaBox.classModBox+'-content').css({
                        'text-align':option.align
                    });
                }
                element.css({'z-index': option.zIndexModBox,'position':option.cssPosition});
            }

        },
        /*метод - обработчик эффектов*/
        EffectHandler:function(object,effect,time,callBackSystem){
            switch (effect) {
                case 'show':object.show(time,function(){callBackSystem()})
                    break
                case 'hide':object.hide(time,function(){callBackSystem()})
                    break
                case 'fadeIn':object.fadeIn(time,function(){callBackSystem()})
                    break
                case 'fadeOut':object.fadeOut(time,function(){callBackSystem()})
                    break
                case 'slideUp':object.show(time,function(){callBackSystem()})
                    break
                case 'slideDown':object.show(time,function(){callBackSystem()})
                    break
            }
        }

	};
    $.fn.sVmegaBox = function(method){
      /*логика вызова метода*/
      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.clickHand.apply( this, arguments );
      } else {
        $.error( 'Метод с именем '+method+' не существует для jQuery.sVmegaBox' );
      }
    };
    /* Public options end methods */
    $.fn.sVmegaBox.defaults = {
        generalTimeEffect:500,
        CreatMask:true,
        ShowMask:true,
        loadClass:true,
        effectShowMask:'fadeIn',
        effectCloseMask:'fadeOut',
        bgColorMask:'#000',
        opacityMask:0.7,
        zIndexMask:999,
		cssPositionMask:'fixed',
        cssCustomMask:'',
        ClickCloseMask:true,
        effectTimeShowMask:'',
        effectTimeCloseMask:'',
        callBackShowMask:function(){},
        callBackCloseMask:function(){},
        callBackCloseMask:function(){},
        title:'',
        type:'',
        text:'Текст по умолчанию',
        align:'',
        buttonText:'Ок',
        IncludeContent:'',
        width:'',
        scale:true,
        drag:false,
        keyCodePress:16,
        unselect:true,
        ModBoxFooter:'',
        ModBoxFooterFunc:function(element){},
        addClass:'',
        zIndexModBox:1000,
        modePosition:'center',
        modePositionVal:'10px',
        cssPosition:'fixed',
		cssPositionTop:'50%',
		cssPositionLeft:'50%',
        cssCustom:'',
        effectShowModBox:'fadeIn',
        effectCloseModBox:'fadeOut',
        effectTimeShowModBox:'',
        effectTimeCloseModBox:'',
        callBackShowModBox:function(){},
        callBackCloseModBox:function(box){},
        closeLink:true,
        closeLinkClass:'close',
        closeLinkTitle:'Закрыть окно',

        callBackBefore:function(box){},
        callBackBeforeClick:function(link,box){},
        callBackAfter:function(element){},
        /*параметры модальной ссылки */
        attrLinkMod:'data-content'
  };
})( jQuery );
/* --End sVmegaBox-- */
