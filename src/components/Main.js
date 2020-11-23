function Main() {
    return (
        <>
        <div>
            <div className="pos-f-t navigation ">
            <nav className="navbar navbar-dark bg-transparent container-fluid">
                <li className=".navbar-brand">
                    <div className="logo-container container">
                    <img src ="/ironhack.svg" />
                    </div>
                 </li>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </nav>
            </div>

        </div>



        <div className="header-wrapper">
        <h1 className='title'>  Say hello to <br /> ReactJS </h1>
        <p className="baseline"> You will learn how to use <br /> the most popular frontend library, <br /> and become a super Ninja developer </p>
        <button className="button"> Awesome! </button>
        </div>
        </>
    )
   }
   
   export default Main;
   
   