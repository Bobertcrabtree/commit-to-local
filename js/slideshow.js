/*THE CODE BELOW SWITCHS THE CLASS ACTIVE FROM ONE IMAGE TO THE NEXT TO CREATE THE IMAGE CHANGE*/
function ss(){
    $current = $('.ss img.active');
    if($current.length==0){
        $('.ss img:first-child').addClass('active');
    }else{
        $next = $current.removeClass('active').next();
         if($next.length==0){
             $('.ss img:first-child').addClass('active');
         }else{
             $next.addClass('active');
         }
    }
}
/*THE CODE BELOW SETS THE AMOUNT OF TIME BETWEEN IMAGES CHANGES*/
setInterval(ss,6000);