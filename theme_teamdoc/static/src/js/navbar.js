$(document).on("scroll",function(){
    //After Scroll
    if ($(document).scrollTop()>50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#big_logo_column").addClass("hidden");
        $(".navbar-brand").removeClass("hidden");
        $('#big_logo_column').addClass('affix');
      
        //$(".navbar-header").removeClass("hide");
    } 
    //Before Scroll
    else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");  
        $("#big_logo_column").removeClass("hidden");
        $(".navbar-brand").addClass("hidden");
        $('#big_logo_column').removeClass('affix');
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

