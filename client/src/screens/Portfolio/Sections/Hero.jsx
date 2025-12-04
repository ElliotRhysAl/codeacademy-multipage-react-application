// libraries


// assets

export default function Hero() {
  return (

    <div className="hero min-h-screen" style={{ backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",}}>
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md flex flex-col items-center">
            <h1 className="mb-5 text-5xl font-bold">Reach Out!</h1>
              <span className="mb-5 text-lg">
                If you
                <span className="text-rotate">
                  <span>
                    <span className="px-1">have questions.❓</span>
                    <span className="px-1">have feedback.📋</span>
                    <span className="px-1">just want to say hello!👋</span>
                  </span>
                </span>
                <br/>
                Our team is here to assist you. 
                Don't hesitate to get in touch!
              </span>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
  );
        


        
}  
