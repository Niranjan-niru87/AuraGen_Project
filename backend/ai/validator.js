function validateComponents(form){

    if(!form.title){
        return {
            valid:false,
            reason:"Missing title"
        };
    }


    if(!form.description){
        return {
            valid:false,
            reason:"Missing description"
        };
    }


    if(!form.steps){
        return {
            valid:false,
            reason:"Missing steps"
        };
    }


    return {
        valid:true,
        reason:"Valid UI"
    };

}


module.exports = validateComponents;