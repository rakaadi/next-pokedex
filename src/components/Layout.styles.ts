import tw, { styled } from "twin.macro"

export const LayoutContainer = styled.section`
    ${tw`bg-gray-400`}

    main {
        ${tw`container m-auto max-w-xl pt-8 min-h-screen`}
    }
`;