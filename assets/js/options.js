import { SELECTORS } from "./const.js";

const ID_TO_SELECTOR = {
    "ads_left": SELECTORS.ADS_LEFT,
    "ads_news": SELECTORS.ADS_NEWS,
    "ads_groups": SELECTORS.ADS_GROUPS,
    "ads_audio": SELECTORS.ADS_AUDIO,
    
    "menu_profile": SELECTORS.MENU_PROFILE,
    "menu_news": SELECTORS.MENU_NEWS,
    "menu_messenger": SELECTORS.MENU_MESSENGER,
    "menu_friends": SELECTORS.MENU_FRIENDS,

    "news_stories": SELECTORS.NEWS_STORIES,
    "news_recommended": SELECTORS.NEWS_RECOMMENDED,
    "news_apps": SELECTORS.NEWS_APPS,
    "news_groups": SELECTORS.NEWS_GROUPS,
    "news_people": SELECTORS.NEWS_PEOPLE,

    "friends_right": SELECTORS.FRIENDS_RIGHT,

    "groups_recommended": SELECTORS.GROUPS_RECOMMENDED,
    
    "ecosystem_btn": SELECTORS.ECOSYSTEM_BTN,
    "fastchat": SELECTORS.FASTCHAT,
    "left_menu": SELECTORS.LEFT_MENU,
    "recommendations_label": SELECTORS.RECOMMENDATIONS_LABEL,
};

let options = {};

document.addEventListener("DOMContentLoaded", function(){
    chrome.storage.sync.get("options", function(data){
        options = data.options || {};
        console.log(options);

        // Реклама
        document.getElementById("ads_left").checked = options[SELECTORS.ADS_LEFT];
        document.getElementById("ads_news").checked = options[SELECTORS.ADS_NEWS];
        document.getElementById("ads_groups").checked = options[SELECTORS.ADS_GROUPS];
        document.getElementById("ads_audio").checked = options[SELECTORS.ADS_AUDIO];

        // Пункты меню
        document.getElementById("menu_profile").checked = options[SELECTORS.MENU_PROFILE];
        document.getElementById("menu_news").checked = options[SELECTORS.MENU_NEWS];
        document.getElementById("menu_messenger").checked = options[SELECTORS.MENU_MESSENGER];
        document.getElementById("menu_friends").checked = options[SELECTORS.MENU_FRIENDS];

        // Новости
        document.getElementById("news_stories").checked = options[SELECTORS.NEWS_STORIES];
        document.getElementById("news_recommended").checked = options[SELECTORS.NEWS_RECOMMENDED];
        document.getElementById("news_apps").checked = options[SELECTORS.NEWS_APPS];
        document.getElementById("news_groups").checked = options[SELECTORS.NEWS_GROUPS];
        document.getElementById("news_people").checked = options[SELECTORS.NEWS_PEOPLE];

        // Друзья
        document.getElementById("friends_right").checked = options[SELECTORS.FRIENDS_RIGHT];

        // Сообщества
        document.getElementById("groups_recommended").checked = options[SELECTORS.GROUPS_RECOMMENDED];

        // Разное
        document.getElementById("ecosystem_btn").checked = options[SELECTORS.ECOSYSTEM_BTN];
        document.getElementById("fastchat").checked = options[SELECTORS.FASTCHAT];
        document.getElementById("left_menu").checked = options[SELECTORS.LEFT_MENU];
        document.getElementById("recommendations_label").checked = options[SELECTORS.RECOMMENDATIONS_LABEL];
    });

    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(function(cb){
        cb.addEventListener('change', function() {
            console.log("Toggled " + ID_TO_SELECTOR[cb.id]);
            options[ID_TO_SELECTOR[cb.id]] = !options[ID_TO_SELECTOR[cb.id]];
            chrome.storage.sync.set({options: options});
        })
    });
});