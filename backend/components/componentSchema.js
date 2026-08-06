const componentSchema = {

    type: "object",

    properties: {

        version: {
            type: "string"
        },


        mode: {
            type: "string"
        },


        layout: {

            type: "object",

            properties: {

                type: {
                    type: "string"
                },

                direction: {
                    type: "string"
                },

                padding: {
                    type: "string"
                },

                spacing: {
                    type: "string"
                }

            }

        },


        components: {

            type: "array",

            items: {

                type: "object",

                properties: {


                    id: {
                        type: "string"
                    },


                    type: {
                        type: "string"
                    },


                    properties: {
                        type: "object"
                    }


                }

            }

        }

    }

};


module.exports = componentSchema;