import React from 'react'


const Broken = (props) => {
    const {
        updateCurrentPage
      } = props
    return (
        <section>
            <h2>Whoops, this page is broken!</h2>
            <button onClick={() => updateCurrentPage("About")}>Go home</button>
        </section>
    )
}

export default Broken
