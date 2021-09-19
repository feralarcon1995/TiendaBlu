import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const Loading = () => {
    return (
        <div align='center'>
            <Loader
                type="TailSpin"
                color="#0004ff60"
                height={150}
                width={150}
                timeout={3000}
            />
        </div>
    )
}

export default Loading