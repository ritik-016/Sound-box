const sounds = ['shabash', 'sher', 'jeene nhi dete', 'kismat', 'kitna soun']

sounds.forEach(sound =>{
    const btn =document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.getElementById('button').appendChild(btn)
})