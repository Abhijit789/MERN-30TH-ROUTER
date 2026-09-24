import React from 'react'
import { Link } from 'react-router-dom'

function ContactList() {
  return (
    <>
     <div className="container">
        <div className="row p-3">
            <p className='fw-bold text-primary'>Contact List <Link to={'/addcontact'} className='p-1 bg-primary rounded'><i className='fa fa-plus-circle text-white'></i></Link></p>
            <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis adipisci, sint perferendis itaque eius ab nemo voluptates exercitationem corporis, pariatur assumenda corrupti alias totam? Vel qui quibusdam ut natus. Pariatur!</p>
        </div>
        <div className="row my-2">
            <div className="col-6">
                <div className="card">
                     <div className="row">
                        <div className="col-4">
                            Img
                        </div>
                        <div className="col-6">
                            <ul className='list-group p-2'>
                                <li className='list-group-item'>Name : Anil Kapoor</li>
                                <li className='list-group-item'>Email : anilk@123.com</li>
                                <li className='list-group-item'>Contact : 9899890989</li>
                            </ul>
                        </div>
                        <div className="col-2 d-flex flex-column align-items-center f-wrap">
                             <Link to="/editcontact/:1" className='btn btn-primary my-1'><i className='fa fa-pen'></i></Link>
                             <Link to="/viewcontact/:1" className='btn btn-warning my-1'><i className='fa fa-eye'></i></Link>
                             <button className='btn btn-danger my-1'><i className='fa fa-trash'></i></button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default ContactList
