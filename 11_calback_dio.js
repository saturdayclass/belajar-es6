const  getcake = (callback) => {
    let cake = null;
    console.log("sedang membuat kue")
    setTimeout(() => {
        cake = "kue siap";
        callback(cake)
        
    },

    )
}

getcake((cake) => {
    console.log(cake)
}

)