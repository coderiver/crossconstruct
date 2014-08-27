head.ready(function() {

	$(document).on("click", function(){
		$(".js-popup").hide();
		$(".js-select").removeClass("is-active");
		$(".js-overlay").hide();
		$("html").removeClass("has-open-popup");
	});

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
        	
            $(".js-select-text").click(function(event){
            	var select = $(this).parents(".js-select");
            	var select_list = select.find(".js-select-list");
                if (select.hasClass("is-active")) {
                    select.removeClass("is-active");
                }
                else {
                    select.addClass("is-active");
                }
                event.stopPropagation();
            });
            
        $(".js-select-list a").click(function(event) {
                var id = $(this).attr("data-val");
                var text = $(this).text();
                $(this).parents(".js-select").find(".js-select-text").text(text);
                $(this).parents(".js-select").find("input").val(id);
                $(this).parents(".js-select").removeClass("is-active");
                return false;
                event.stopPropagation();
            });
    }
    selectList();

    $(".js-scroll-to").on("click",function(){
		var section = $(this).attr("data-section");
		var sectionTop = $("."+section).offset().top;
		$('html, body').animate({
            scrollTop: sectionTop
        }, 200); 
		return false;
	});

	$(".js-popup-link").on("click", function(event){
		$(".js-overlay").fadeIn(200);
		var popup = $(this).attr("href");
		$("html").addClass("has-open-popup");
		$("."+popup).fadeIn(200);
		event.stopPropagation();
		return false; 
	});
	$(".js-popup-close").on("click", function(){
		$(".js-overlay").fadeOut(200); 
		$(".js-popup").fadeOut(200); 
		$("html").removeClass("has-open-popup")
		return false;
	});
	$(".js-popup .popup").on("click", function(event){
		event.stopPropagation();
	});
	function accordion() {
        $(".js-accord-title").on("click", function(){
        	if ($(this).parents(".js-accord").hasClass("is-active")) {
        		$(this).parents(".js-accord-wrap").find(".js-accord").removeClass("is-active").find(".js-accord-body").slideUp("fast");
        	}
        	else {
        			$(this).parents(".js-accord-wrap").find(".js-accord").removeClass("is-active").find(".js-accord-body").slideUp("fast");
        		    $(this).parents(".js-accord").toggleClass("is-active").find(".js-accord-body").slideToggle("fast");
        	}
        	
        });
    }
    accordion();
    function tab() {
        $(".js-tab").each(function(){

            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();

            tab_link.bind("click", function() {
            	if ($(this).hasClass("is-active")) {
            		return false;
            	}
            	else {
            		var index = $(this).attr("href");
	                tab_link.removeClass("is-active");
	                tab_link.parent().removeClass("is-active");
	                $(this).addClass("is-active");
	                $(this).parent().addClass("is-active");
	                tab_cont.hide();
	                $(this).parents(".js-tab-group").find("."+index).toggle();
            	}
               	return false;
            });
        });
    }
    tab();

    $('.js-slick').slick({
	  dots: false,
	  arrows: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 6,
	  slidesToScroll: 6,
	  responsive: [
	    {
	      breakpoint: 1385,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5,
	        infinite: false,
	      }
	    },
	    {
	      breakpoint: 1185,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,
	        infinite: false,
	      }
	    }
	  ]
	});

	function slideCounter() {
		var counter_all = +$(".js-slick-slide").length-$(".js-slick-slide.slick-cloned").length;
		var counter = $(".js-slick-slide.slick-active").length;
		$(".js-projects-active").text(counter);
		$(".js-projects-all").text(counter_all);
	}
	slideCounter();
	// $(window).resize(function(){
	// 	slideCounter();	
	// });
	
	// article
	var article = $('.js-article');
	if (article.length) {
		article.find('table tr:nth-child(2n) td').css('background-color', '#e8e8e8');
	};

 
});