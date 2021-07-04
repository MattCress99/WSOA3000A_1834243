$(document).ready(function()
        {
            $(".ShowMoreButton").click(function()
            {
                $(this).prev().toggle();
                $(this).siblings('.points').toggle();
                if($(this).text()=='Read More')
                {
                    $(this).text('Read Less');
                }
                else
                {
                    $(this).text('Read More');
                }
            });
        });