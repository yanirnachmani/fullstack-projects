$('#fade-out-slow').click(function(){
    $('#affected').fadeOut('slow')
})
$('#fade-out-fast').click(function(){
    $('#affected').fadeOut('fast')
})
$('#fade-out-2-sec').click(function(){
    $('#affected').fadeOut(2000)
})


$('#fade-in-slow').click(function(){
    $('#affected').fadeIn('slow')
})
$('#fade-in-fast').click(function(){
    $('#affected').fadeIn('fast')
})
$('#fade-in-2-sec').click(function(){
    $('#affected').fadeIn(2000)
})


$('#fade-toggle').click(function(){
    $('#affected').fadeToggle(2000)
})


$('#slide-up-slow').click(function(){
    $('#affected').slideUp('slow')
})
$('#slide-up-fast').click(function(){
    $('#affected').slideUp('fast')
})
$('#slide-up-2-sec').click(function(){
    $('#affected').slideUp(2000)
})

$('#move').click(function(){
    $('#affected').css({'position': 'relative'}).animate({
        left: '20px',
    })
    $('#affected').css({'position': 'relative'}).animate({
        top: '20px',
    })
    $('#affected').css({'position': 'relative'}).animate({
        left: '-20px',
    })
    $('#affected').css({'position': 'relative'}).animate({
        top: '-20px',
    })
})