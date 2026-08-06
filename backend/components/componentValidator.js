const componentLibrary = require("./componentLibrary");


function validateComponents(uiJSON){

    if(!uiJSON.components){

        return {
            valid:false,
            reason:"No components found"
        };

    }


    for(const component of uiJSON.components){


        const type = component.type;


        if(!componentLibrary[type]){

            return {

                valid:false,

                reason:
                `Unsupported component: ${type}`

            };

        }

    }


    return {

        valid:true,

        message:"All components are valid"

    };

}


module.exports = validateComponents;