function ButtonSelect(type) {
    alert(`${type} move!`);
}

let wtr = document.querySelector('#water');
wtr.onclick = () => ButtonSelect('water');

let grs = document.querySelector('#grass');
grs.onclick = () => ButtonSelect('grass');

let fir = document.querySelector('#fire');
fir.onclick = () => ButtonSelect('fire');