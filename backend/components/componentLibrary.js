const componentLibrary = {

    Container: {

        description:
        "Main layout wrapper for grouping components.",

        props: {

            direction:
            "vertical or horizontal",

            padding:
            "spacing value",

            alignment:
            "center, left, right"

        }

    },


    Card: {

        description:
        "A container with visual separation for content.",

        props: {

            title:
            "card heading",

            description:
            "supporting text"

        }

    },


    Heading: {

        description:
        "Large heading text component.",

        props: {

            text:
            "heading content",

            level:
            "1 to 6"

        }

    },


    Text: {

        description:
        "Normal paragraph or helper text.",

        props: {

            content:
            "text content"

        }

    },


    Input: {

        description:
        "User input field.",

        props: {

            label:
            "field label",

            placeholder:
            "input hint",

            type:
            "text,email,password",

            required:
            "true or false"

        }

    },


    Button: {

        description:
        "Action button component.",

        props: {

            text:
            "button label",

            variant:
            "primary,secondary",

            action:
            "submit or next"

        }

    },


    Form: {

        description:
        "Group of input components.",

        props: {

            spacing:
            "space between fields"

        }

    },


    Alert: {

        description:
        "Information or warning message.",

        props: {

            message:
            "alert content",

            type:
            "info,error,success"

        }

    },


    Progress: {

        description:
        "Shows completion progress.",

        props: {

            value:
            "percentage"

        }

    }

};


module.exports = componentLibrary;