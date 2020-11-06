import { GetStaticProps } from "next"
import Link from "next/link"

import { PokemonList } from "../styles/index.styles"
import Layout from "../components/Layout.components"

import { IPokemon } from "../types"

export default function Home({ pokemon }: IPokemon) {
  return (
    <Layout title="NextJS Pokedex">
      <h1 className="text-4xl mb-8 text-center font-semibold">NextJS Pokedex</h1>
      <PokemonList>
        {
          pokemon.map((p, index) => (
            <li key={index}>
              <Link href={`/pokemon?id=${index + 1}`}>
                <a>
                  <p>
                    <span>{index + 1}.</span>
                    {p.name}
                  </p>
                  <img src={p.image} alt={p.name} />
                </a>
              </Link>
            </li>
          ))
        }
      </PokemonList>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
    const { results }: { results: object[] } = await res.json()
    const pokemon = results.map((result: object, index: number) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result,
        image
      }
    })
    return {
      props: { pokemon }
    }
  } catch (error) {
    throw error
  }
}