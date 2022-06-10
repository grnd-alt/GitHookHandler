import React from 'react'

type propsType= {
    content: String
}

function DefaultButton (props:propsType) {
    return <button> { props.content } </button>
}

export { DefaultButton }