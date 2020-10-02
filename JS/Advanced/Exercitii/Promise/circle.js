function go() {
    /*     showCircle(150, 150, 100, div => {
        div.classList.add('message')
        div.append('Hello World!')
    }) 
    */
    showCircleWithPromise(150, 150, 100).then(
        div => {
            div.classList.add('message')
            div.append('Hello World!')
        }
    )
}

function showCircleWithPromise(x,y,r) {
    let div = document.createElement('div')
    div.style.width = 0
    div.style.height = 0
    div.style.left = x + 'px'
    div.style.top = x + 'px'
    div.className = 'circle'
    document.body.append(div)

    return new Promise(resolve => {
        setTimeout(() => {
            div.style.width = r * 2 + 'px'
            div.style.height = r * 2 + 'px'
            div.addEventListener('transitionend', function handler() {
                div.removeEventListener('transitionend', handler)
                resolve(div)
            })
        }, 0)
    })
}