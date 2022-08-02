import React from 'react'

export default function About(props) {
    return (
        <div className="container my-2">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429'}} className="accordion-item">
                    <h2 className="accordion-header " id="flush-headingOne">
                        <button  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            About The App
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This Is Very Useful App. You Can Enter Your Text And Analyze It At Every Angle.<br />
                            <h3>Features</h3>
                            <ul className="list-group list-group-flush">
                                <li  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="list-group-item">Convert Your Text To UpperCase</li>
                                <li  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="list-group-item">Convert Your Text To LowerCase</li>
                                <li  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="list-group-item">Remove All The Extra Spaces From Your Text</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Developers Team
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse acc" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-body">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
                            texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
                            (N. del T. persona que se dedica a la imprenta).</div>
                    </div>
                </div>
                <div  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Terms And Conditions
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div  style={{color: props.mode==='light'?'black':'white',background: props.mode==='light'?'white':'#141429' }} className="accordion-body">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de
                            texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor
                            (N. del T. persona que se dedica a la imprenta) desconocido usó una galería
                            de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
