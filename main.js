document.addEventListener('DOMContentLoaded', function(){ 
  document.getElementById('Badoo').onclick = function(){
    chrome.tabs.executeScript( null, {code:"let badooInterval = setInterval(function(){if(document.getElementsByClassName('ovl__frame js-ovl-wrap')[0]){clearInterval(badooInterval)}return document.getElementsByClassName('js-profile-header-vote-yes')[0].click()} ,1)"});
};
  document.getElementById('Tinder').onclick = function(){
    chrome.tabs.executeScript( null, {code:"let badooInterval = setInterval(function(){if(document.getElementsByClassName('subscriptionOptionSelect__optionsContainer')[0]){clearInterval(badooInterval)}return document.getElementsByClassName('recsGamepad__button--like Scale(1.1):h')[0].click()} ,1)"});
}
})
