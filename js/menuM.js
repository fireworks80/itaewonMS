	function checkCategory(){
			var arrow = $('.loc__bg__arrow');
			var category = $('.menu-list-wrap');

			if(!arrow.hasClass('on') && !category.hasClass('on')){
				arrow.addClass('on');
				category.addClass('on');
			} else {
				arrow.removeClass('on');
				category.removeClass('on');
			}
		}

		$('.loc__btn').click(function(e){
			e.preventDefault();
			checkCategory();

		});

		$('.menu-list__close').click(function(){
			checkCategory();
		});