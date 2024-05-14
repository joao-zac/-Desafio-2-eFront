import styled from "styled-components";

export const StylesForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 12%;

    .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .field {
            background-color: #121214;
            margin-bottom: .5rem;
            padding: 1rem .5rem;
            display: flex;
            width: 100%;
            border-radius: .4rem;

            img {
                margin-right: .5rem;
            }

            input {
                background-color: transparent;
                border: 0;
                color: #B9B9B9;
                font-size: 1.6rem;
                font-weight: 400;
            }
        }
    }

    a {
        text-decoration: none;
        color: #899BFF;
        font-size: 1.3rem;
        font-weight: 600;
        text-align: start;
    }

    button {
        padding: 1rem 0;
        margin-top: 2rem;
        margin-bottom: 5rem;
        border: 0;
        border-radius: .4rem;
        font-size: 1.6rem;
        font-weight: 700;
        cursor: pointer;
        background-image: linear-gradient(#899BFF 100%, #5C6DCF 100%);
        color: #FFFFFF;
    }
`