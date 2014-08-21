head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	$(".js-show-nav").on("click", function(){
		$(".js-nav").toggleClass("is-active");
		$(this).toggleClass("is-active");
		return false;
	});
	$(".js-hide-nav").on("click", function(){
		$(".js-nav").removeClass("is-active");
		return false;
	});

	// construction services
	var constr_serv = $('.js-constr-serv'),
			constr_serv_more = constr_serv.find('.constr__serv-more'),
			constr_serv_list = constr_serv.find('.constr__serv-list ul'),
			constr_serv_cur_height = constr_serv_list.outerHeight(),
			constr_serv_hide = constr_serv.find('.constr__serv-hide');
	constr_serv_more.on('click', function () {
		var constr_serv_auto_height = constr_serv_list.css('height', 'auto').height();
		constr_serv_list.height(constr_serv_cur_height).animate({height: constr_serv_auto_height}, 300);
	});
	constr_serv_hide.on('click', function () {
		constr_serv_list.animate({height: constr_serv_cur_height}, 300);
	});

	// works
	var works = $('.works'),
			works_btn = works.find('.works__btn'),
			works_list = works.find('.works__list'),
			works_cur_height = works_list.height(),
			white_overlay = $('.js-white-overlay');
	works_btn.on('click', function () {
		var works_auto_height = works_list.css('height', 'auto').height();
		if (!works_btn.hasClass('is-active')) {
			works_btn.addClass('is-active');
			white_overlay.fadeIn();
			works_list.height(works_cur_height).animate({height: works_auto_height}, 300);
		}
		else {
			works_btn.removeClass('is-active');
			white_overlay.fadeOut();
			works_list.animate({height: works_cur_height}, 300);
		};
	});
	white_overlay.on('click', function () {
		works_btn.trigger('click');
	});

	$(".js-filter-link").on("click", function(){
		$(this).toggleClass("is-active");
		return false;
	});

	// service
	var service = $('.js-service'),
			service_cur_height = service.height(),
			service_more = $('.js-service-more');
	service_more.on('click', function () {
		var service_auto_height = service.css('height', 'auto').height();
		if (!service_more.hasClass('is-active')) {
			service_more.addClass('is-active');
			service.height(service_cur_height).animate({height: service_auto_height}, 300);
		}
		else {
			service_more.removeClass('is-active');
			service.animate({height: service_cur_height}, 300);
		};
	});

	function selectList() {
        	
            $(".js-select-text").click(function(){
            	var select = $(this).parents(".js-select");
            	var select_list = select.find(".js-select-list");
                if (select.hasClass("is-active")) {
                    select.removeClass("is-active");
                }
                else {
                    select.addClass("is-active");
                }
            });
            
        $(".js-select-list a").click(function() {
                var id = $(this).attr("data-val");
                var text = $(this).text();
                $(this).parents(".js-select").find(".js-select-text").text(text);
                $(this).parents(".js-select").find("input").val(id);
                $(this).parents(".js-select").removeClass("is-active");
            });
    }
    selectList();

<<<<<<< HEAD
    $(".js-scroll-to").on("click",function(){
		var section = $(this).attr("data-section");
		var sectionTop = $("."+section).offset().top;
		$('html, body').animate({
            scrollTop: sectionTop
        }, 200); 
		return false;
	});
=======
>>>>>>> 987e3405e7a621baef9628dde8802d64334d26f1
});