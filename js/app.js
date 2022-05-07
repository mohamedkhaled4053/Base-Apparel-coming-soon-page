let button = $('button')
let form = $('form')
let input = $('input')

button.click((e) => {
    let re = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    if (!re.test(input.val())) {
        e.preventDefault()
        form.addClass('error')
    }
})