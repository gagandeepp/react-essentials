import React from 'react';

class Login extends React.Component {
    constructor(props){
        super(props);
    }

    handleSubmit(event){

    }
    render() {
        return (
            <div id="bg" className="main_container">
                <div className="log_container">
                    <div className="content_box fl">
                        <div className="grid_logo_box">
                            <div className="logo_text">
                               <img src= "../../assets/images/CBRE_logo.png" style={{padding: '4px 0'}} />
                            </div>
                        </div>
                        <form>
                            <div className="clearfix">
                                <p className="head_text">Login to your account</p>
                                <div className="error-msg"></div>
                                <div className="input_container">
                                    <input type="text" placeholder="Domain\UserName" required />
                                        <div className="icons__item icon_div" data-name="user">
                                            <i className="glyphicon glyphicon-user"></i>
                                        </div>
                                        <div className="error-msg">
                                            {/* <div>UserName is required.</div> */}
                                        </div>

                                        <div className="input_container">
                                            <input type="password" placeholder="Password" required />
                                                <div className="icons__item icon_div" data-name="user">
                                                    <i className="glyphicon glyphicon-lock"></i>
                                                </div>
                                                <div className="error-msg">
                                                    {/* <div >Password is required.</div> */}

                                                </div>
                                                <div>
                                                    <input type="checkbox" id="test1" />
                                                    <label htmlFor="test1">Remember me</label>
                                                </div>
                                                <button type="submit" className="btn btn-primary">LOGIN</button>
                                                <div>
                                                <a href="https://www.google.co.in">Forgot Your Password?</a>
                                            </div>
                                        </div>


                                    </div>
                                <div className="footer_box fl">2018 CBRE, Inc. Version : 1.0.0.0</div>
                                </div>
                    </form>
                    </div>
</div>
</div>
                        );
                    }
                }

export default Login;
