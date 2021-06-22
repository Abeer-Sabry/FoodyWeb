$(function(){
    $(window).on("scroll",function(){
     let dist = $(this).scrollTop()
       if(dist>70){
           $(".navbar").addClass("bgColor")
       }else{
        $(".navbar").removeClass("bgColor")
       }
    })
})