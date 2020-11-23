function Footer() {
    return (
         <>
         <div className="footer-wrapper">
        <div className="container">
            <div className="row global-row">

                <div class="col-sm-3 column-sizer">
                    <img src="icon1.png" className="icons"/>
                    <h3> Declarative </h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>

                <div class="col-sm-3 column-sizer">
                    <img src="icon2.png" className="icons"/>
                    <h3> Components </h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>

                <div class="col-sm-3 column-sizer">
                    <img src="icon3.png" className="icons"/>
                    <h3> Single-Way </h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>

                <div class="col-sm-3 column-sizer">
                    <img src="icon4.png" className="icons"/>
                    <h3> JSX </h3>
                    <p>Statically typed, designed to run on modern browsers.</p>
                </div>

            </div>
        </div>
        </div>
        </>
    )
   }
   
   export default Footer;
   