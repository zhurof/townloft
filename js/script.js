var isMobile = function (){
	return window.outerWidth < 992
}
$('.phone-block__head').click(function(){
	$(this).toggleClass('active');
	$(this).parent('.phone-block').toggleClass('open');
	closeMenu();
})
$('.chat-block__trigger').click(function(){
	$(this).toggleClass('active');
	$(this).parent('.chat-block').toggleClass('open');
	closeMenu();
})
$(document).click(function(e){
	if(!$(e.target).is('.phone-block') && !$('.phone-block').has(e.target).length){
		$('.phone-block').removeClass('open').find('.phone-block__head').removeClass('active');
	}
	if(!$(e.target).is('.chat-block') && !$('.chat-block').has(e.target).length){
		$('.chat-block').removeClass('open').find('.chat-block__trigger').removeClass('active');
	}
})
//поля с плавающим placeholder
function checkField(){
	if($(this).val()){
		$(this).addClass('field__input--filled');
	}else{
		$(this).removeClass('field__input--filled');
	}
}
$('.field__input').each(checkField);
$('.field__input').change(checkField);

$('.select').blur(function(){
	$(this).removeClass('select--open');
})
$('.select__output').click(function(){
	$(this).parent('.select').toggleClass('select--open');
})
$('.select__list>li').click(function(){
	var value = $(this).text(),
			select = $(this).parents('.select');
			
	select.removeClass('select--open');
	select.find('.select__input').val(value).trigger('change');
})
$('.select__input').change(function(){
	var wrapper = $(this).parent('.select');
	
	wrapper.find('.select__output').text(this.value);
	if(this.value){
		wrapper.addClass('select--filled');
	}else{
		wrapper.removeClass('select--filled');
	}
	
})

//Слайдеры
$('.catalog__slider').slick({
	prevArrow: '<span class="catalog__arrow prev fa-angle-left"></span>',
	nextArrow: '<span class="catalog__arrow next fa-angle-right"></span>'
})
$('.advantages__slider').slick({
	prevArrow: '<span class="advantages__arrow prev fa-angle-left"></span>',
	nextArrow: '<span class="advantages__arrow next fa-angle-right"></span>'
})
$('.contacts__slider').slick({
	prevArrow: '<span class="contacts__arrow prev fa-angle-left"></span>',
	nextArrow: '<span class="contacts__arrow next fa-angle-right"></span>'
})


//прокрутка в портфолио
$('.portfolio__arrow').click(function(e){
	var container = $(this).parents('.portfolio').find('.portfolio__content').get(0),
			scrollLeft = container.scrollLeft,
			scrollWidth = container.scrollWidth,
			width = container.clientWidth;
			
	if($(e.target).is('.next') && scrollLeft + width < scrollWidth){
		$(container).animate({
			scrollLeft: scrollLeft + width/2
		},1000)
	}
	if($(e.target).is('.prev') && scrollLeft > 0){
		$(container).animate({
			scrollLeft: scrollLeft - width/2
		},1000)
	}
})

//табы в контактах
$('.contacts__link').click(function(e){
	e.preventDefault()
	if($(this).is('.btn--thin')){
		var index = $(this).index();
		
		$(this).removeClass('btn--thin').siblings('.contacts__link').addClass('btn--thin');
		$(this).parents('.contacts').find('.contacts__tab').hide().eq(index).fadeIn(300).find('.slick-slider').slick('setPosition');
		
	}
})
//Модальные окна
function openModal(modalId, initiator){  
  var scrollWidth = window.innerWidth - document.body.clientWidth;//Ширина полосы прокрутки
  
	$('.modal-wrapper').children().unwrap();
	if(!$('#'+modalId).length){
		alert('Ошибка вызова модального окна');
		return false;
	}
	$('#'+modalId).trigger('beforeModalShow',initiator).wrap('<div class="modal-wrapper" style="display:none" />');
	$('.modal-wrapper').fadeIn(400,function(){
    $('#'+modalId).trigger('afterModalShow',initiator);
  });	
	if(scrollWidth){
		$('html').css('padding-right',scrollWidth);
		$('body').css('overflow-y','hidden');
	}
}
function closeModal(){
	$('.modal-wrapper').fadeOut(200, function(){
		$('html').css('padding-right','');
		$('body').css('overflow-y','');
	});
}
$(document).on('click', '[data-modal]', function(e){
	e.preventDefault();
	var modal = $(this).data('modal');
	openModal(modal,e.target);
})
$(document).on('click', '.modal__close', closeModal);

$(document).on('mousedown', '.modal-wrapper', function(e){
	if(!$('.modal').is(e.target) && $('.modal').has(e.target).length === 0){
		closeModal();
	}
})
$(document).keydown(function(e){
	//Закрытие окна на Esc
	if(e.which == 27){
		closeModal();
	}
});

//верхнее меню
$('.header__menu a[href^="#"]').click(function(e){
	e.preventDefault();
	var target = $(this.hash);
	if(target.length){
		var top = target.offset().top;
		if(isMobile){
			top -= $('.header').height()
		}
		$('html, body').animate({
      scrollTop: top
    }, 800);
		closeMenu();
	}
})
$('.header__logo').click(function(){
	$('html, body').animate({
      scrollTop: 0
    }, 800);
})
$('.menu-btn').click(function(){
	$(this).toggleClass('active');
	$('.header__menu').toggleClass('open');
})
function closeMenu(){
	$('.menu-btn').removeClass('active');
	$('.header__menu').removeClass('open');
}
//Карта
$('[id^="map"]').each(function(){
	var map = this;
	ymaps.ready(function(){
		initMap(map);
	});
})
function initMap(map){	
	var address = $(map).data('address') || 'Караганда';
			
	ymaps.geocode(address, {
			results: 1
	}).then(function (res) {
			// Выбираем первый результат геокодирования.
			var firstGeoObject = res.geoObjects.get(0),
					// Координаты геообъекта.
					coords = firstGeoObject.geometry.getCoordinates(),
					// Область видимости геообъекта.
					bounds = firstGeoObject.properties.get('boundedBy');
					
					firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
					// Получаем строку с адресом и выводим в иконке геообъекта.
					firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
					
			var myMap = new ymaps.Map(map.id, {
				center: coords,
				zoom: 15,
				controls: []
			});
							
			myPlacemark = new ymaps.Placemark(coords, 
				{
					hintContent: '',
					balloonContent: ''
				});
				myMap.geoObjects.add(myPlacemark);
	});		
	//myMap.behaviors.disable('scrollZoom')
}