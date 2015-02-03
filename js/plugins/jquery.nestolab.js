/*global $, jQuery, document*/
jQuery(document).ready(function () {

    'use strict';

    $('#contactform').submit(function () {

        var action, values;
		action = $(this).attr('action');
		values = $(this).serialize();

        $('#form-message').slideUp(550, function () {

			$('#form-message').hide();

            $.post(action, values, function (data) {
				$('#form-message').html(data);
				$('#form-message').slideDown('fast');

                if (data.match('success') !== null) {

                    var imgsuccess;
                    imgsuccess = document.getElementById('recaptcha');
                    imgsuccess.src = 'php/contact-form/php/image.php?rand_number=' + Math.random();

                    $('#name').val('');
                    $('#email').val('');
                    $('#subject').val('');
                    $('#message').val('');
                    $('#verify').val('');
                }
			});

		});

		return false;

	});

    $('form#contactform input').focus(function () {
        $('form#contactform #form-message').slideUp('550');
    });

    $('form#contactform textarea').focus(function () {
        $('form#contactform #form-message').slideUp('550');
    });

    $('a#regenerate').click(function () {
        var img;
        img = document.getElementById('recaptcha');
        img.src = 'php/contact-form/php/image.php?rand_number=' + Math.random();
    });

});