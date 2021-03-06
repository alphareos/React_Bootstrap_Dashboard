import { Link } from "react-router-dom";
import { Nav,Navbar, Container } from "react-bootstrap";
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import MainContent from "../components/mainContent";

const Home = () => {
  // page content
  

  return (
  
    <>
    <Sidebar />
    <Header />  
   
    <div class="pcoded-main-container">
      <div class="pcoded-content alpha ">
          {/* <!-- [ breadcrumb ] start --> */}
          <div class="page-header">
              <div class="page-block ">
                  <div class="row align-items-center">
                      <div class="col-md-12">
                          <div class="page-header-title">
                              <h5 class="m-b-10">Dashboard Analytics</h5>
                          </div>
                          <ul class="breadcrumb">
                              <li class="breadcrumb-item"><a href="index.html"><i class="feather icon-home"></i></a></li>
                              <li class="breadcrumb-item"><a href="#!">Dashboard Analytics</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- [ breadcrumb ] end --> */}
          {/* <!-- [ Main Content ] start --> */}
        <MainContent />
          {/* <!-- [ Main Content ] end --> */}
      </div>
      
  </div>
   </>

  )
}

export default Home