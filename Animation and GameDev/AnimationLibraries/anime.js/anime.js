anime({
    targets: document.querySelectorAll('div.square'),
    translateX: 400,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(50)
})

anime({
    targets: 'path',
    duration: 10000,
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function(el, i) { return i*250},
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
})