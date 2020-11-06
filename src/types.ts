export type LayoutProps = {
    title: string,
    children: React.ReactNode
}

export type Pokemon = {
    name: string,
    image: string,
    weight: number,
    height: number,
    types: {
        type: { name: string }
    }[],
    index: number
}

export interface IPokemon {
    pokemon: Pokemon[]
}
