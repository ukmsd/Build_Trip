import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import home1 from './images/home1.jpg';
import home2 from './images/home2.jpg';
import home3 from './images/home3.jpg';
import home4 from './images/home4.jpg';

import demo1 from './images/demo1.jpg';
import demo2 from './images/demo2.jpg';
import demo3 from './images/demo3.jpg';
import demo4 from './images/demo4.jpg';



const Demo = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className=''>

                    <nav className="navbar  justify-content-between">
                        <p className="navbar-brand">MEMORIES</p>

                        <ul>
                            <li><button>SIGNUP</button></li>
                            <li><button>LOGIN</button></li>
                            <li><button>MAKE A TRIP</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='demobg'>
                <div className='flex'>

                    <div className='clo-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={home1} width="215" height='300' alt='home1' />
                            </div>
                        </div>
                    </div>

                    <div className='clo-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={home2} width="215" height='300' alt='home2' />
                            </div>

                        </div>
                    </div>

                    <div className='clo-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={home3} width="215" height='300' alt='home3' />
                            </div>

                        </div>
                    </div>

                    <div className='clo-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <img src={home4} width="215" height='300' alt='home4' />
                            </div>

                        </div>
                    </div>
                </div>


                <div className='maketrip'>

                    <button className="btn btn-primary btn-lg btn-block">MAKE A TRIP</button>

                </div>


            


            
                <div className='demomar'>
                    <h4>PLAN A TRIP</h4>
                    <div className='flex'>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo1} width="215" height='300' alt='demo1' />
                                <div className='card-body'>
                                </div>
                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo2} width="215" height='300' alt='demo2' />
                                <div className='card-body'>
                                </div>

                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='democard'>
                                <div className='card'>
                                    <img src={demo3} width="215" height='300' alt='demo3' />

                                    <div className='card-body'>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo4} width="215" height='300' alt='demo4' />

                                <div className='card-body'>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className='demomar'>
                    <h4>PLAN A TRIP</h4>
                    <div className='flex'>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo1} width="215" height='300' alt='demo1' />
                                <div className='card-body'>
                                </div>
                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo2} width="215" height='300' alt='demo2' />
                                <div className='card-body'>
                                </div>

                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='democard'>
                                <div className='card'>
                                    <img src={demo3} width="215" height='300' alt='demo3' />

                                    <div className='card-body'>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='clo-3'>
                            <div className='card'>
                                <img src={demo4} width="215" height='300' alt='demo4' />

                                <div className='card-body'>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="demoflex3">
                    <div className="row">
                    </div>

                    <div>
                        <h2>Features</h2>

                        <div>
                            <ul>
                                <li>
                                    <a href="#">Cool Stuff</a>
                                </li>
                                <li>
                                    <a href="#">Random Feature</a>
                                </li>
                                <li>
                                    <a href="#">Team Feature</a>
                                </li>
                                <li>
                                    <a href="#">Stuff for Developers</a>
                                </li>
                                <li>
                                    <a href="#">Another One</a>
                                </li>
                                <li>
                                    <a href="#">Last One</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div class="demoflex3">
                            <div className="row">
                            </div>

                            <div>
                                <h2>Resources</h2>

                                <div>
                                    <ul>
                                        <li>
                                            <a href="#">Resources</a>
                                        </li>
                                        <li>
                                            <a href="#">Resource Name</a>
                                        </li>
                                        <li>
                                            <a href="#">Another Resource</a>
                                        </li>
                                        <li>
                                            <a href="#">FinalResource</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            
                                <div class="demoflex3">
                                    <div className="row">
                                    </div>

                                    <div>
                                        <h2>About</h2>

                                        <div>
                                            <ul>
                                                <li>
                                                    <a href="#">About</a>
                                                </li>
                                                <li>
                                                    <a href="#">Team</a>
                                                </li>
                                                <li>
                                                    <a href="#">Locations</a>
                                                </li>
                                                <li>
                                                    <a href="#">Privacy</a>
                                                </li>
                                                <li>
                                                    <a href="#">Terms</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>;

            </div>
        </>
    )
}
export default Demo;