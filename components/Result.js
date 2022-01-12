import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";

function Result({ results }) {
    if (!Array.isArray(results)) return 'results are not array'
    return (
        <FlipMove className='px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />

            ))}
        </FlipMove>
    )
}

export default Result
