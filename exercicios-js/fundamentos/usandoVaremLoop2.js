const funcs = []

for (var i = 0; i<10;i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()

funcs[8]()

// sempre funcs[] vai ser 10 por causa do escopo , VAR