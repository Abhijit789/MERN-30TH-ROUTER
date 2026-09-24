import React from 'react'
import { Link } from 'react-router-dom'

function AddContact() {

  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col">
                <p className='p-2 text-success fw-bold'>Create Contact</p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quod error ducimus libero ab dolorem necessitatibus sequi nesciunt saepe sapiente? Cupiditate assumenda eligendi pariatur ducimus earum laudantium optio minus itaque!</p>
            </div>
        </div>
        <div className="row">
            <div className="col-5">
                  <form action="">
                    <div className="mb-2">
                    <input type="text" placeholder='Name' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Mail' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Phone' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Photo Url' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Company' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Designation' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                    <input type="text" placeholder='Group' className='form-control' />
                    </div>
                    
                    <div className="mb-2">
                        <input className='btn btn-success' type="submit" value="Submit" />
                        <Link to={'/'} className='btn btn-warning ms-2'>Cancel</Link>
                    </div>

                     </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default AddContact