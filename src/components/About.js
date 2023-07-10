import React, { useState } from 'react'


export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'

    })

    const [text, setText] = useState('Enable Dark Mode')

    const changeColor = () => {
        if (myStyle.color === 'black') {
            setmyStyle(
                {
                    color: 'white',
                    backgroundColor: 'black'
                }
            )
            setText('Disable Dark Mode')
        }
        else {
            setmyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white'

                }

            )
            setText('Enable Dark Mode')
        }
    }

    return (
        <div className='Container' style={myStyle}>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={myStyle}>
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" style={myStyle}>
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button className="btn btn-primary my-3 mx-2" onClick={changeColor}>{text}</button>
            </div>
        </div>
    )
}
