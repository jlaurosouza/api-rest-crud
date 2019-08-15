let promises = [obj1, obj2].map(function(obj){
    return db.query('obj1.id').then(function(results){
        obj1.rows = results
        return obj1
    })
})

Promise.all(promises).then(function(results) {
    console.log(results)
})


