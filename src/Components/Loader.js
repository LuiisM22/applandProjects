import React from 'react'
const LoaderGif = require('../img/Spinner.svg');

const Loader = () => {
    //state={}
    return (
        <div class="loader-container">
            <div className="loader">
                <img
                    alt=""
                    /* src="https://firebasestorage.googleapis.com/v0/b/applandproyects.appspot.com/o/src%2Fimg%2FSpinner.svg?alt=media&token=0f2f878d-96ea-4df4-bc2c-b557f6b15c9d" */
                    src={LoaderGif}
                    />
            </div>
        </div>
    )
}

export default Loader;