import tw, { styled } from "twin.macro"

export const PokemonStyles = styled.section`
    ${tw`w-50 mx-auto h-full`}

    h1 {
        ${tw`text-4xl mb-2 text-center capitalize`}
    }

    img {
        ${tw`mx-auto h-64 w-64`}
    }

    p {
        span {
            ${tw`font-bold mr-2`}
        }
    }

    h2 {
        ${tw`text-2xl mt-6 mb-2`}
    }
`;

export const HomeLink = styled.p`
    ${tw`my-8 text-center`}

    a {
        ${tw`text-2xl underline`}
    }
`;