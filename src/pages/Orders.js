import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'

function Orders() {
  return (
    <>
    <Header />
    <Sidebar />
    <div class="pcoded-main-container">
      <div class="pcoded-content alpha ">
          {/* <!-- [ breadcrumb ] start --> */}
          <div class="page-header">
              <div class="page-block ">
                  <div class="row align-items-center">
                      <div class="col-md-12">
                          <div class="page-header-title">
                              <h5 class="m-b-10">Orders</h5>
                          </div>
                          <ul class="breadcrumb">
                              <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                              <li class="breadcrumb-item"><a href="#!">Orders</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- [ breadcrumb ] end --> */}
          {/* <!-- [ Main Content ] start --> */}
          <div class="col-xl-10 col-md-12 ml-5">
  
    </div>
    
				<div class="card">
					
					<div class="card-body">
						<div id="exampleModalLong" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLongTitle">Modal Title</h5>
										<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
									</div>
									<div class="modal-body">
										<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
										<p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
										<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
										<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
										<p class="mb-0">Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn  btn-secondary" data-dismiss="modal">Close</button>
										<button type="button" class="btn  btn-primary">Save changes</button>
									</div>
								</div>
							</div>
						</div>

                        {/** orders table */}
                        <div class="card table-card">
                    <div class="card-header">
                        <h5>Orders</h5>
                      
                    </div>
        
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>
                                            <div class="chk-option">
                                                <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            Ordered By
                                        </th>
                                        <th>Product</th>
                                        <th>Order Date</th>
                                        <th class="text-right">Payment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="assets/images/user/avatar-4.jpg" alt="user image" class="img-radius wid-40 align-top m-r-15" />
                                                <div class="d-inline-block">
                                                    <h6 data-toggle="modal" data-target="#exampleModalLong">John Deo</h6>
                                                    <p class="text-muted m-b-0">Graphics Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-toggle="modal" data-target="#exampleModalLong">Able Pro</td>
                                        <td>Jun, 26</td>
                                        <td class="text-right"><label class="badge badge-light-danger">Low</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="assets/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40 align-top m-r-15" />
                                                <div class="d-inline-block">
                                                    <h6 data-toggle="modal" data-target="#exampleModalLong" >Jenifer Vintage</h6>
                                                    <p class="text-muted m-b-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-toggle="modal" data-target="#exampleModalLong" >Mashable</td>
                                        <td>March, 31</td>
                                        <td class="text-right"><label class="badge badge-light-primary">high</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="assets/images/user/avatar-3.jpg" alt="user image" class="img-radius wid-40 align-top m-r-15" />
                                                <div class="d-inline-block">
                                                    <h6 data-toggle="modal" data-target="#exampleModalLong" >William Jem</h6>
                                                    <p class="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-toggle="modal" data-target="#exampleModalLong" >Flatable</td>
                                        <td>Aug, 02</td>
                                        <td class="text-right"><label class="badge badge-light-success">medium</label></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="chk-option">
                                                <label class="check-task custom-control custom-checkbox d-flex justify-content-center done-task">
                                                    <input type="checkbox" class="custom-control-input" />
                                                    <span class="custom-control-label"></span>
                                                </label>
                                            </div>
                                            <div class="d-inline-block align-middle">
                                                <img src="assets/images/user/avatar-2.jpg" alt="user image" class="img-radius wid-40 align-top m-r-15" />
                                                <div class="d-inline-block">
                                                    <h6 data-toggle="modal" data-target="#exampleModalLong" >David Jones</h6>
                                                    <p class="text-muted m-b-0">Developer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-toggle="modal" data-target="#exampleModalLong">Guruable</td>
                                        <td>Sep, 22</td>
                                        <td class="text-right"><label class="badge badge-light-primary">high</label></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

						{/* <button type="button" class="btn  btn-primary" data-toggle="modal" data-target="#exampleModalLong">Launch demo modal</button> */}
					</div>
				</div>
			</div>
			{/* <!-- [ Scrolling-modal ] end --> */}
          {/* <!-- [ Main Content ] end --> */}
      </div>
      
 
    
    </>
  )
}

export default Orders