import Thumbnail from "./Thumbnail"

function Result( { results } ) {
    if (!Array.isArray(results)) return 'results are not array'
    return (
        <div>
            {results.map((result) =>(
                <Thumbnail key={result.id} result={result} />
                
            ) ) }
        </div>
    )
}

export default Result
