function calculate() {
    fetch('items.json')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err.message))
}

calculate();