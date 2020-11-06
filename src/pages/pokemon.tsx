import { GetServerSideProps, GetServerSidePropsContext } from "next"
import Link from "next/link"
import { ParsedUrlQuery } from "querystring"

import { PokemonStyles, HomeLink } from "../styles/pokemon.styles"
import Layout from "../components/Layout.components"

import { Pokemon } from "../types"

export default function pokemon({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Layout title={pokemon.name}>
            <PokemonStyles>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <p><span>Weight: </span>{pokemon.weight}</p>
                <p><span>Height: </span>{pokemon.height}</p>
                <h2>Types</h2>
                {
                    pokemon.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                    ))
                }
                <HomeLink>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </HomeLink>
            </PokemonStyles>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const id = query.id

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const pokemon = await res.json()
        const paddedIndex = ("00" + id).slice(-3)
        const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
        pokemon.image = image

        return {
            props: { pokemon }
        }
    } catch (error) {
        throw error
    }
}