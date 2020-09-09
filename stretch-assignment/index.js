let block = document.querySelectorAll('.block');
block.forEach(e =>{
    e.addEventListener('click', (event) =>{
        console.log(e['classList'][1])
    });
});

