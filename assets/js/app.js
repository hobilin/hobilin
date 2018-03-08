 $(document).ready(function(){
        $('.carousel.carousel-slider').carousel({fullWidth: true});
        $('.carousel').carousel();

      $('.myself').hide();
      $('.projects').hide();
      $('.contact').hide();

      $('#code').click(function() {
        $('.tip').hide();
        $(this).removeClass('dot');
        $(this).addClass('flower-dot');
        $(this).siblings().removeClass('flower-dot');
        $(this).siblings().addClass('dot');
        $(this).children().attr('src', 'assets/img/flower-dot.png');
        $(this).siblings().children().attr('src', 'assets/img/dot.png')

        $('.main').show();
        $('.projects').hide();
        $('.contact').hide();
        $('.myself').hide();
      })

      $('#skills').click(function() {
        $('.tip').hide();
        $(this).removeClass('dot');
        $(this).addClass('flower-dot');
        $(this).siblings().removeClass('flower-dot');
        $(this).siblings().addClass('dot');
        $(this).children().attr('src', 'assets/img/flower-dot.png');
        $(this).siblings().children().attr('src', 'assets/img/dot.png')

        $('.main').hide();
        $('.projects').hide();
        $('.contact').hide();
        $('.myself').show();

      });

      $('#projects').click(function() {
        $('.tip').hide();
        $(this).removeClass('dot');
        $(this).addClass('flower-dot');
        $(this).siblings().removeClass('flower-dot');
        $(this).siblings().addClass('dot');
        $(this).children().attr('src', 'assets/img/flower-dot.png');
        $(this).siblings().children().attr('src', 'assets/img/dot.png');

        $('.main').hide();
        $('.projects').show();
        $('.contact').hide();
        $('.myself').hide();
      });

      $('#contact').click(function() {
        $('.tip').hide();
        $(this).removeClass('dot');
        $(this).addClass('flower-dot');
        $(this).siblings().removeClass('flower-dot');
        $(this).siblings().addClass('dot');
        $(this).children().attr('src', 'assets/img/flower-dot.png');
        $(this).siblings().children().attr('src', 'assets/img/dot.png')

        $('.main').hide();
        $('.projects').hide();
        $('.contact').show();
        $('.myself').hide();
      });



    });
        



    var fade = document.querySelector('.fade');


    var image = document.getElementById('splash');
    var aquarelle = new Aquarelle(image, 'assets/img/mask.png', {
        autoplay: true,
        loop: true,
    });

    aquarelle.addEventListener('created', function() {
        var canvas = this.getCanvas();
        console.log(canvas)
        canvas.removeAttribute('style');
        image.parentNode.insertBefore(canvas, image.nextSibling);
        image.parentNode.removeChild(image);
    });

    aquarelle.addEventListener('changed', function(event) {


        var canvas = this.getCanvas();
        canvas.style.webkitTransform = canvas.style.transform = 'translate(-40%, -50%)';



    });

