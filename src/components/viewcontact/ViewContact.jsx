import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewContact() {
    let id=useParams();
    console.log(id);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className='text-warning fw-bold p-3'>View Contact</p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus architecto magnam iste ad ab esse iusto necessitatibus accusantium ullam, amet ratione perferendis expedita facilis placeat officiis. Accusamus tempore aliquam possimus!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <img className='img-fluid' style={{height:"150px",width:"150px"}} src="data:image/webp;base64,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" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <ul className='list-group'>
                            <li className="list-group-item">Name: Alcious</li>
                            <li className="list-group-item">Email : alcious@gmail.com</li>
                            <li className="list-group-item">Contact : 8787878787</li>
                            <li className="list-group-item">Company : Test Yantra</li>
                            <li className="list-group-item">Designation : Software Developer</li>
                            <li className="list-group-item">Social</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                     <div className="col-2">
                         <Link to={'/'} className='btn btn-warning my-2'>Back</Link>
                     </div>
                </div>
            </div>
        </>
    )
}

export default ViewContact