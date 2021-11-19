import React from 'react'
import PropTyes from 'prop-types'
import RepoItem from './Repoitem'


const Repos = ({ repos }) => {
        return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

Repos.propTypes = {
    repos: PropTyes.array.isRequired
}

export default Repos
