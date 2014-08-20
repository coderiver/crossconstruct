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
			constr_serv_list = constr_serv.find('.constr__serv-list'),
			constr_serv_hide = constr_serv.find('.constr__serv-hide');
	constr_serv_more.on('click', function () {
		constr_serv_list.addClass('is-open');
	});
	constr_serv_hide.on('click', function () {
		constr_serv_list.removeClass('is-open');
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

	$(".js-filter a").on("click", function(){
		$(this).toggleClass("is-active");
		return false;
	});

});