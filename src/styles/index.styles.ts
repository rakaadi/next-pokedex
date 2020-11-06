import tw, { styled } from "twin.macro";

export const PokemonList = styled.ul`
    ${tw`w-11/12 mx-auto grid grid-cols-6 gap-4`}

    a {
        ${tw`border p-4 border-gray-100 my-2 capitalize flex flex-col justify-between items-center text-lg bg-gray-300 rounded-md`}
    }

    img {
        ${tw`w-full h-40 mr-3`}
    }

    span {
        ${tw`mr-2 font-bold`}
    }
`;