let form = document.querySelector('form')
let input = document.querySelector('input')
let button = document.querySelector('button')


button.addEventListener('click',(e)=>{
    
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!re.test(input.value)) {
        e.preventDefault()
        form.classList.add('error')
    }
})