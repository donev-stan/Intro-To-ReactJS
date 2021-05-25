import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { Main } from './Main'

export const Layout = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Header />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Main />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
