
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <div className="head">Quikie</div>
        </header>

        <div className="body">
          <div className="box">
            <div className="box1">
              <div className="box-p">
                <p className="p-1">GOOGL</p>
                <div className="img1"></div>
              </div>
              <div className="box-u">
                <p className="p-2">1515 USD</p>
              </div>
            </div>
            <div className="box1 box2">
              <div className="box-p">
                <p className="p-1">FB</p>
                <div className="img2"></div>
              </div>
              <div className="box-u">
                <p className="p-2">266 USD</p>
              </div>
            </div>
            <div className="box1">
              <div className="box-p">
                <p className="p-1">AMZN</p>
                <div className="img3"></div>
              </div>

              <div className="box-u">
                <p className="p-2">3116 USD</p>
              </div>
            </div>
          </div>
          <p className="p-3">Stock Details Table</p>
          <div className="table">
            <div className="r-1">
              <div className="logo">
                <div className="logo-r"></div>
              </div>

              <input type="text" placeholder="s" />
            </div>

            <div className="r">
              <div className="r-2 r-h">
                <p className="tp-1">COMPANY NAME</p>
                <p className="tp-1">SYMBOL </p>
                <p className="tp-1">MARKET CAP</p>
                <p className="tp-2">CURRENT PRICE</p>
              </div>
              <div className="r-2">
                <p className="tp-3">141 Capital Inc</p>
                <p className="tp-3 tp-4">.ONCP</p>
                <p className="tp-3">$145.4K</p>
                <button className="btn">VIEW</button>
                <p className="tp-3">$0.001 USD </p>
              </div>
              <div className="r-2">
                <p className="tp-3">Cardlytics Inc</p>
                <p className="tp-3 tp-4"> .CDLX</p>
                <p className="tp-3">$1.8B</p>
                <button className="btn-1">Save Data</button>
                <p className="tp-3">$66 USD </p>
              </div>
              <div className="r-2">
                <p className="tp-3">Brightcove Inc</p>
                <p className="tp-3 tp-4">.BCOV</p>
                <p className="tp-3">$394M</p>
                <button className="btn-1">Save Data</button>
                <p className="tp-3">$10 USD </p>
              </div>
              <div className="r-2">
                <p className="tp-3">BigString Corp</p>
                <p className="tp-3 tp-4 tp-4">.BSGC</p>
                <p className="tp-3">$543K</p>
                <button className="btn">VIEW</button>
                <p className="tp-3">$0.003 USD </p>
              </div>
              <div className="r-2">
                <p className="tp-3">Akamai Technologies Inc</p>
                <p className="tp-3 tp-4">.AKAM</p>
                <p className="tp-3">$145.4K</p>
                <button className="btn-1">Save Data</button>
                <p className="tp-3">$106 USD </p>
              </div>
              <div className="r2">
                <div className="r-h r-f">1-5 of 276</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
