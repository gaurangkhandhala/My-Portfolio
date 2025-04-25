import React from 'react';
import './Project.css';
import strabuks from '../../assets/starbuck.png'
import radio from '../../assets/radio.png'
import portfolio from '../../assets/portfolio.png'

export default function Project() {
  return (
    <div className='container'>
      <div className='Title'>
        <h6 className=' text-center'>My Recent Works</h6>
        <h1>Projects</h1></div>
      <div className='p-maindiv col-11'>
        <div className="card justify-content-center cardcolor text-white" style={{ width: '20rem' }}>
          <div className="card-body">
            <img className='card-img' src={strabuks} alt="" />
            <h5 className="card-title">Starbuck</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/gaurangkhandhala/Starbucks" className="btn github"><i className="bi bi-github white1"></i> &nbsp; View Code</a>
          </div>
        </div>
        <div className="card cardcolor text-white" style={{ width: '20rem' }}>
          <div className="card-body">
            <img className='card-img' src={radio} alt="" />

            <h5 className="card-title">Radio DJ</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/gaurangkhandhala/Radio" className="btn github"><i className="bi bi-github white1"></i> &nbsp;View Code</a>
          </div>
        </div>
        <div className="card cardcolor text-white" style={{ width: '20rem' }}>
          <div className="card-body">
            <img className='card-img' src={portfolio} alt="" />
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://github.com/gaurangkhandhala/Bootstrap" className="btn github"><i className="bi bi-github white1"></i> &nbsp;View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}
