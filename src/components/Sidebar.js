import React from 'react'


function Sidebar() {
  return (
    <nav className="pcoded-navbar menu-light ">
    <div className="navbar-wrapper  ">
        <div className="navbar-content scroll-div " >
            
            <div className="">
                <div className="main-menu-header">
                    <img className="img-radius" src="assets/images/hamilee.png" alt="User-Profile-Image" />
                    <div className="user-details">
                        <div id="more-details">Alphareon <i className="fa fa-caret-down" /> </div>
                    </div>
                </div>
                <div className="collapse" id="nav-user-link">
                    <ul className="list-unstyled">
                        <li className="list-group-item"><a href="user-profile.html"><i className="feather icon-user m-r-5"></i>View Profile</a></li>
                        <li className="list-group-item"><a href="#!"><i className="feather icon-settings m-r-5"></i>Settings</a></li>
                        <li className="list-group-item"><a href="auth-normal-sign-in.html"><i className="feather icon-log-out m-r-5"></i>Logout</a></li>
                    </ul>
                </div>
            </div>
            
            <ul className="nav pcoded-inner-navbar ">
                <li className="nav-item pcoded-menu-caption">
                    <label>Navigation</label>
                </li>
                <li className="nav-item">
                    <a href="index.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-home"></i></span><span className="pcoded-mtext">Dashboard</span></a>
                </li>
                <li className="nav-item pcoded-hasmenu">
                    <a href="#!" className="nav-link "><span className="pcoded-micon"><i className="feather icon-layout"></i></span><span className="pcoded-mtext">Page layouts</span></a>
                    <ul className="pcoded-submenu">
                        <li><a href="layout-vertical.html" target="_blank">Vertical</a></li>
                        <li><a href="layout-horizontal.html" target="_blank">Horizontal</a></li>
                    </ul>
                </li>
                
                <li className="nav-item pcoded-menu-caption">
                    <label>Forms &amp; table</label>
                </li>
                <li className="nav-item">
                    <a href="form_elements.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-file-text"></i></span><span className="pcoded-mtext">Forms</span></a>
                </li>
                <li className="nav-item">
                    <a href="tbl_bootstrap.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-align-justify"></i></span><span className="pcoded-mtext">Table</span></a>
                </li>
                <li className="nav-item pcoded-menu-caption">
                    <label>Chart & Maps</label>
                </li>
                <li className="nav-item">
                    <a href="chart-apex.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-pie-chart"></i></span><span className="pcoded-mtext">Chart</span></a>
                </li>
                <li className="nav-item">
                    <a href="map-google.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-map"></i></span><span className="pcoded-mtext">Maps</span></a>
                </li>
               
                <li className="nav-item"><a href="sample-page.html" className="nav-link "><span className="pcoded-micon"><i className="feather icon-sidebar"></i></span><span className="pcoded-mtext">Sample page</span></a></li>

            </ul>
            

        </div>
    </div>
</nav>
  )
}

export default Sidebar