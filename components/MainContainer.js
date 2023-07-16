import React from 'react'
import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {
  return (
    <>
        <Head>
            <meta keywords={"our, key, words, for, search" + keywords}></meta>
            <title>Main page</title>
        </Head>
        <A />
        <div>
            {children}
        </div>
    </>
  )
}

export default MainContainer
