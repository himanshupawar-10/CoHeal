import React from 'react';
import './Banner.css'

function Banner(){
    
    return(
      <div>
        <header className="sans-serif">
          <div className="cover bg-left bg-center1">
            <div className="bg-black-80">
              <div className="tc-l ph3">
                <h1 className="f2 f1-l fw2 white-90 pt6 mt0 lh-title">This is your super impressive headline</h1>
                <h2 className="fw1 f3 pb6 mb0 white-80">Now a subheadline where explain your wonderful new startup even more</h2>
              </div>
            </div>
          </div> 
        </header>
      </div>
    );
}
export default Banner;