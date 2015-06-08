$(window).scroll(function() {
    //After Scroll
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#logo-header").addClass("hidden");
        $(".navbar-brand").removeClass("hidden");
        
      
        //$(".navbar-header").removeClass("hide");
    } 
    //Before Scroll
    else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");  
        $("#logo-header").removeClass("hidden");
        $(".navbar-brand").addClass("hidden");
        //$(".navbar-header").addClass("hide");
    }
    
});



//~ <script type="text/javascript">
//~ $(document).on("scroll",function(){
    //~ if($(document).scrollTop()>100){
        //~ $("header").removeClass("large").addClass("small");
    //~ } else{
        //~ $("header").removeClass("small").addClass("large");
    //~ }
//~ });
//~ </script>

