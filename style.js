function product(){
    if (window.innerWidth < 1000){
        var a = document.getElementsByClassName('img_slide1')
        for (var i = 0; i < 3; i++) {
             if (i>0){
                a[i].remove()
             }
        }
        console.log(a[i])
        a[1].remove()

    }
}
product();
  window.addEventListener('resize', function() {
    product();
  })
