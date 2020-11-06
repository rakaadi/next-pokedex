import Head from "next/head"

import { LayoutContainer } from "./Layout.styles"

import { LayoutProps } from "../types"

export default function Layout({ title, children }: LayoutProps) {
    return (
        <LayoutContainer>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </LayoutContainer>
    )
}