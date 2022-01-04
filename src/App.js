import React from "react"
import DataFetcher from "./DataFetcher"

function App() {    
    return (
        <div>
            <DataFetcher url="https://api.spacexdata.com/v3/launches/upcoming">
                {(data, loading) => {
                    return (
                        loading ? 
                        <h1>Loading...</h1> :
                        <p>{JSON.stringify(data)}</p>
                    )
                }}
            </DataFetcher>
        </div>
    )
}

export default App