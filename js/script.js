$(".btnTheme").click(function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        theme.textContent = "LIGHTMODE"
        backgroundTheme = 'dark'
    }else{
        theme.textContent = "DARKMODE"
        backgroundTheme = 'light'
    }
    localStorage.setItem("localTheme", backgroundTheme)
});
const background = localStorage.getItem("localTheme");
if(background === "dark") {
    document.body.classList.toggle("dark")
    theme.textContent = "LIGHTMODE"
}else if(background === "light") {
    document.body.classList.remove("dark")
    theme.textContent = "DARKMODE"
};
let beforeScroll = 0;
let afterScroll;
let $nav = $('#navList');
$(window).on("scroll", function(){
  afterScroll = $(this).scrollTop();
  if(beforeScroll < afterScroll) {
    $nav.removeClass('slideDown').addClass('slideUp');
  }else if (beforeScroll > afterScroll) {
    $nav.removeClass('slideUp').addClass('slideDown');
  }
  beforeScroll = afterScroll;
});