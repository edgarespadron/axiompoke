const ShowPokemon = props => {

    const { pokemon } = props;

    return (
        <div className="text-center">
            <h2>{ pokemon.name }</h2>
        </div>
    )
}

export default ShowPokemon;