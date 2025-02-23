import React from 'react'
import PageContent from './PageContent'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <PageContent>
                {children}
            </PageContent>
            <Footer />
        </div>
    )
}

export default Layout;