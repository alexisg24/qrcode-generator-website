const $QRContainer = document.getElementById('QR');
const $Button = document.getElementById('button');
const $Input = document.getElementById('form')
const printQR = (string) => {
    $QRContainer.innerHTML = ''
    new QRCode($QRContainer, string);
}

const errorQR = () =>{
    $QRContainer.innerHTML = `Please insert a value in the form`;
    $Input.classList.add('error');
    setTimeout(() => {
        $Input.classList.remove('error');
    }, 1000);
}

$Button.addEventListener('click', ()=>{
    $Input.value.length > 0
    ? printQR($Input.value)
    : errorQR();
})



