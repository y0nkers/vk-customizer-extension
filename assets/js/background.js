chrome.runtime.onInstalled.addListener(() => {
	const apply_options = false;

	const options = {
		// Реклама
		"#ads_left": true, // Реклама слева
		"._ads_block_data_w": true, // Рекламные блоки в ленте новостей
		"._post_content:has(.PostHeader > .PostHeaderInfo > .PostHeaderSubtitle > span.PostHeaderSubtitle__item)": true, // Реклама в сообществе в ленте
		".audio_promo": true, // Музыка -> Реклама VK музыки сверху

		// Пункты меню
		"#l_pr": false, // "Моя страница"
		"#l_nwsf": false, // "Новости"
		"#l_msg": false, // "Мессенджер"
		"#l_fr": false, // "Друзья"

		// Пункт "Новости"
		"#stories_feed_wrap": false, // Блок "Истории" сверху
		"#ui_rmenu_recommended": false, // "Рекомендации" в меню справа
		".apps_feedRightAppsBlock": false, // Блок "Приложения" справа
		".feed_groups_recomm": false, // Блок "Авторы для вас" в ленте
		".FeedBlockWrap": false, // Блок "Возможно, вы знакомы" в ленте (.feed_friends_recomm)
		//"#feed_blog_reminder": false, // Блок справа в новостях
		
		// Пункт "Друзья"
		"#friends_right_blocks_root": false, // Блок "Возможные друзья" справа
		
		// Пункт "Сообщества"
		"#groups_filters_wrap": false, // Блок "Рекомендуемые сообщества" справа

		// Разное
		"#react_rootEcosystemServicesNavigationEntry": false, // Кнопка экосистемы справа сверху
		"#fastchat-reforged": false, // Быстрый чат справа снизу
		".left_menu_nav_wrap": false, // Блок с дополнительными пунктами слева снизу
		".LegalRecommendationsLinkLeftMenuAuthorized": false, // Надпись "Применяются рекомендательные технологии"
		".WideSeparator--legalRecommendationsLink": true, // Сепаратор надписи и блока
	};

	console.log(options);
	chrome.storage.sync.set({apply_options: apply_options});
	chrome.storage.sync.set({options: options});
});
