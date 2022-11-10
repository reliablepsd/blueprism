var $ = jQuery.noConflict();
jQuery(function() {
	isElementExist(".logo-row_v2", initLogoSlide);
	isElementExist(".slider-imgTxt", initImgTxt);
	isElementExist(".tabset-tab", initTabsToSelect);
});

// Helper if element exist then call function
function isElementExist(_el, _cb) {
	var elem = document.querySelector(_el);

	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch(e) {
			console.log(e);
		}
	}
}

function initLogoSlide() {
	$('.logo-row_v2').slick({
		slidesToShow: 6,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
					infinite: true,
					dots: false,
					arrows: false,
					autoplay: true,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					infinite: true,
					dots: false,
					arrows: false,
					autoplay: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: false,
					arrows: false,
					autoplay: true,
				},
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: false,
					arrows: false,
					autoplay: true,
				},
			}
		],
	})
}

function initImgTxt() {
	$('.slider-imgTxt').slick({
		slidesToShow: 1,
		dots: true,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 1000,
		speed: 3000,
	})
}

// function init
function initTabsToSelect() {
	// Settings for default select
	jQuery('.tabset-tab').tabset({
		tabLinks: 'button',
		attrib: 'data-id',
		addToParent: true,
		defaultTab: true
	});

	// Custom code for select
	jQuery('.tabset-select').on('click', '.tabset-toggle', function(e){
		jQuery('.tabset-tab').toggleClass('active-drop');
	});
	var cText = jQuery('.tabset-tab').find('.active').text();
	jQuery('.tabset-select').find('.tabset-toggle').html(cText);
	jQuery('.tabset-tab').on('click', 'button', function(e){
		e.preventDefault()
		var aText = jQuery(this).text();
		jQuery('.tabset-select').find('.tabset-toggle').html(aText);
		jQuery('.tabset-tab').removeClass('active-drop');
	});
	jQuery(document).on('click', function(e) {
		if (jQuery(e.target).closest('.tabset-select').length === 0){
			jQuery('.tabset-select').find('.tabset-tab').removeClass('active-drop');
			e.stopPropagation();
		}
	});
	jQuery(window).on('load resize orientationchange', function(){
		if (jQuery('.tabset-select').length){
			jQuery('.tabset-select').find('.tabset-tab').removeClass('active-drop');
		}
	});
}

/*
 * jQuery Tabs plugin
 */

;(function($, $win) {
	'use strict';

	function Tabset($holder, options) {
		this.$holder = $holder;
		this.options = options;

		this.init();
	}

	Tabset.prototype = {
		init: function() {
			this.$tabLinks = this.$holder.find(this.options.tabLinks);

			this.setStartActiveIndex();
			this.setActiveTab();

			if (this.options.autoHeight) {
				this.$tabHolder = $(this.$tabLinks.eq(0).attr(this.options.attrib)).parent();
			}

			this.makeCallback('onInit', this);
		},

		setStartActiveIndex: function() {
			var $classTargets = this.getClassTarget(this.$tabLinks);
			var $activeLink = $classTargets.filter('.' + this.options.activeClass);
			var $hashLink = this.$tabLinks.filter('[' + this.options.attrib + '="' + location.hash + '"]');
			var activeIndex;

			if (this.options.checkHash && $hashLink.length) {
				$activeLink = $hashLink;
			}

			activeIndex = $classTargets.index($activeLink);

			this.activeTabIndex = this.prevTabIndex = (activeIndex === -1 ? (this.options.defaultTab ? 0 : null) : activeIndex);
		},

		setActiveTab: function() {
			var self = this;

			this.$tabLinks.each(function(i, link) {
				var $link = $(link);
				var $classTarget = self.getClassTarget($link);
				var $tab = $($link.attr(self.options.attrib));

				if (i !== self.activeTabIndex) {
					$classTarget.removeClass(self.options.activeClass);
					$tab.addClass(self.options.tabHiddenClass).removeClass(self.options.activeClass);
				} else {
					$classTarget.addClass(self.options.activeClass);
					$tab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass);
				}

				self.attachTabLink($link, i);
			});
		},

		attachTabLink: function($link, i) {
			var self = this;

			$link.on(this.options.event + '.tabset', function(e) {
				e.preventDefault();

				if (self.activeTabIndex === self.prevTabIndex && self.activeTabIndex !== i) {
					self.activeTabIndex = i;
					self.switchTabs();
				}
			});
		},

		resizeHolder: function(height) {
			var self = this;

			if (height) {
				this.$tabHolder.height(height);
				setTimeout(function() {
					self.$tabHolder.addClass('transition');
				}, 10);
			} else {
				self.$tabHolder.removeClass('transition').height('');
			}
		},

		switchTabs: function() {
			var self = this;

			var $prevLink = this.$tabLinks.eq(this.prevTabIndex);
			var $nextLink = this.$tabLinks.eq(this.activeTabIndex);

			var $prevTab = this.getTab($prevLink);
			var $nextTab = this.getTab($nextLink);

			$prevTab.removeClass(this.options.activeClass);

			if (self.haveTabHolder()) {
				this.resizeHolder($prevTab.outerHeight());
			}

			setTimeout(function() {
				self.getClassTarget($prevLink).removeClass(self.options.activeClass);

				$prevTab.addClass(self.options.tabHiddenClass);
				$nextTab.removeClass(self.options.tabHiddenClass).addClass(self.options.activeClass);

				self.getClassTarget($nextLink).addClass(self.options.activeClass);

				if (self.haveTabHolder()) {
					self.resizeHolder($nextTab.outerHeight());

					setTimeout(function() {
						self.resizeHolder();
						self.prevTabIndex = self.activeTabIndex;
						self.makeCallback('onChange', self);
					}, self.options.animSpeed);
				} else {
					self.prevTabIndex = self.activeTabIndex;
				}
			}, this.options.autoHeight ? this.options.animSpeed : 1);
		},

		getClassTarget: function($link) {
			return this.options.addToParent ? $link.parent() : $link;
		},

		getActiveTab: function() {
			return this.getTab(this.$tabLinks.eq(this.activeTabIndex));
		},

		getTab: function($link) {
			return $($link.attr(this.options.attrib));
		},

		haveTabHolder: function() {
			return this.$tabHolder && this.$tabHolder.length;
		},

		destroy: function() {
			var self = this;

			this.$tabLinks.off('.tabset').each(function() {
				var $link = $(this);

				self.getClassTarget($link).removeClass(self.options.activeClass);
				$($link.attr(self.options.attrib)).removeClass(self.options.activeClass + ' ' + self.options.tabHiddenClass);
			});

			this.$holder.removeData('Tabset');
		},

		makeCallback: function(name) {
			if (typeof this.options[name] === 'function') {
				var args = Array.prototype.slice.call(arguments);
				args.shift();
				this.options[name].apply(this, args);
			}
		}
	};

	$.fn.tabset = function(opt) {
		var args = Array.prototype.slice.call(arguments);
		var method = args[0];

		var options = $.extend({
			activeClass: 'active',
			addToParent: false,
			autoHeight: false,
			checkHash: false,
			defaultTab: true,
			animSpeed: 500,
			tabLinks: 'a',
			attrib: 'href',
			event: 'click',
			tabHiddenClass: 'js-tab-hidden'
		}, opt);
		options.autoHeight = options.autoHeight;

		return this.each(function() {
			var $holder = jQuery(this);
			var instance = $holder.data('Tabset');

			if (typeof opt === 'object' || typeof opt === 'undefined') {
				$holder.data('Tabset', new Tabset($holder, options));
			} else if (typeof method === 'string' && instance) {
				if (typeof instance[method] === 'function') {
					args.shift();
					instance[method].apply(instance, args);
				}
			}
		});
	};
}(jQuery, jQuery(window)));