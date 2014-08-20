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
			works_cur_height = works_list.height();
	works_btn.on('click', function () {
		var works_auto_height = works_list.css('height', 'auto').height();
		if (!works_btn.hasClass('is-active')) {
			works_btn.addClass('is-active');
			works_list.height(works_cur_height).animate({height: works_auto_height}, 300);
		}
		else {
			works_btn.removeClass('is-active');
			works_list.animate({height: works_cur_height}, 300);
		};
	});

	$(".js-filter-link").on("click", function(){
		$(this).toggleClass("is-active");
		return false;
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
});