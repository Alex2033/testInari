$(document).ready(function() {

    $('.account__btn svg').click(function() {
        if(!$('.sidebar').hasClass('active')) {
            $('.account').addClass('active');
            $('.account__text').fadeIn(450);
            $('.account__img').fadeIn(450);
        }
    });

    $('.account__img').click(function() {
        if (!$('.sidebar').hasClass('active')) {
            $('.account').removeClass('active');
            $('.account__text').hide();
            $('.account__img').hide();
        }
    });

    $('.sidebar__btn').click(function() {
        $(this).toggleClass('active');
    });

    $('#sidebar-activate').click(function() {
        $('.sidebar').toggleClass('active');
        $('.account').removeClass('active');
        $('.account__text').fadeIn(450);
        $('.account__img').fadeIn(450);
        $('.sidebar__hint').hide();
        $('.sidebar__list-text').fadeIn(300);

        if (!$('.sidebar').hasClass('active')) {
            $('.account').removeClass('active');
            $('.account__text').hide();
            $('.account__img').hide();
            $('.sidebar__hint').show();
            $('.sidebar__list-text').hide();
        }
    });

    $(function() {
        var size = 21,
        accountContent= $('.account__text'),
        accountText = accountContent.text();
    
        if(accountText.length > size){
            accountContent.text(accountText.slice(0, size) + '...');
        }
    });

    $(function() {
        $('.moderate-btn').click(function() {
            var item = $(this).parent().parent();
            item.addClass('active');
            $('.popup__title').html(item.find('td:first-child').html());
            $('.popup__registration-email p a')
                .attr('href', 'mailto:' + item.find('td:first-child').html())
                .html(item.find('td:first-child').html());

            if (!$('.popup').hasClass('active')) {
                $('.popup').fadeIn(150).css({'top': $(window).scrollTop() });
            }
        });
    });

    $('.ban-btn__item').click(function() {
        $('.ban-btn__window').fadeIn(150);
    });

    $('#no').click(function() {
        $('.ban-btn__window').fadeOut(150);
    });

    $('.confirm-btn').click(function() {
        $('.table tr').filter('.active').each(function() {
            $(this).addClass('confirmed');
        });
    });

    $('#yes').click(function() {
        $('.popup').fadeOut(150);
        $('.ban-btn__window').fadeOut(150);
        $('.table tr').filter('.active').each(function() {
            $(this).addClass('banned').removeClass('active');
        });
    });

    $('.popup__exit, .confirm-btn').click(function() {
        $('.popup').fadeOut(150);
        $('.ban-btn__window').fadeOut(150);
        $('.moderate-btn').parent().parent().removeClass('active');
    });

});