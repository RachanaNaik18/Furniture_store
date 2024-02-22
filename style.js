function product(){
    if (window.innerWidth < 1000){
        var a = document.getElementsByClassName('img_slide1')
        for (var i = 0; i < 3; i++) {
             if (i>1){
                console.log(a[i])
                a[i].style.display='none';
             }
        }
        console.log(a[1])
    }
}
product();
  window.addEventListener('resize', function() {
    product();
  })
