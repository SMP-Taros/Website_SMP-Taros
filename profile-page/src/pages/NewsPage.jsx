import React from 'react'
import WebHeader from '../components/WebHeader'
import WebNavbar from '../components/WebNavbar'
import WebFooter from '../components/WebFooter'
import WebListBerita from '../components/WebListBerita'

function NewsPage() {
    return (
        <div className='news-page'>
            <WebHeader />
            <WebNavbar />
            <WebListBerita />
            <WebFooter />
        </div>
    )
}

export default NewsPage
