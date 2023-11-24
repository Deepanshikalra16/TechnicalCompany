// index page

$(document).ready(function()
{
    $(window).scroll(function()
    {
        var positiontop=$(document).scrollTop();
        console.log(positiontop);

        if((positiontop>220)&&(positiontop<293)){
            $('.anim').addClass('animate__animated animate__fadeInUp');
        }
        else if((positiontop>469)&&(positiontop<480)){
            $('.anim1').addClass('animate__animated animate__fadeInDown');
        }
        
        else if((positiontop>819)&&(positiontop<832)){
            $('.anim2').addClass('animate__animated animate__zoomIn');
        }
        else if((positiontop>898)&&(positiontop<920)){
            $('.anim3').addClass('animate__animated animate__zoomIn');
        }
        else if((positiontop>2258)&&(positiontop<2300)){
            $('.anim4').addClass('animate__animated animate__flipInX');
        } 
    })
})



// about 

$(document).ready(function()
{
    $(window).scroll(function()
    {
        var positiontop=$(document).scrollTop();
        console.log(positiontop);

        if((positiontop>25)&&(positiontop<65)){
            $('.anim6').addClass('animate__animated animate__fadeInDown');
            $('.anim7').addClass('animate__animated animate__fadeInUp');
        }
        else if((positiontop>456)&&(positiontop<470)){
            $('.anim8').addClass('animate__animated animate__fadeInLeftBig');
            $('.anim9').addClass('animate__animated animate__fadeInRightBig');
        }
    })
})





//  Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//     interval: false
//   });
  
//    for every slide in carousel, copy the next slide's item in the slide.
//    Do the same for the next, next item.
//   $('.multi-item-carousel .item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
    
//     if (next.next().length>0) {
//       next.next().children(':first-child').clone().appendTo($(this));
//     } else {
//         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//     }
//   });

let items1 = document.querySelectorAll('.carousel_05 .item1')

		items1.forEach((el) => {
			const minPerSlide = 4
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items1[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})