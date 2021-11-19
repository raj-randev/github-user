import React from 'react'
import PropTyes from 'prop-types'

const Repoitem = ({ repo }) => {
    return (
        <div className='card'>
            <h3>
            <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

Repoitem.PropTyes = {
    repo: PropTyes.object.isRequired
}

export default Repoitem