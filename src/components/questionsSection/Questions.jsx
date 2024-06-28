
import './Questions.css'
import arrow from './img/arrow.svg'


const Questions = () => {
    return (
        <div className='bg'>
        <div className='Container '>


            <div className="questionItem">
                <h2 className='questionWrapTitle'>More questions?</h2>
            </div>
            <div className="questionWrapper">
                <div className="questionCards">
                    <button className='arrowBtn'><img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>How does HelloFresh’s meal kit delivery service work?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>Which food meal plans & recipes does HelloFresh offer?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>How many times a week does HelloFresh deliver?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>How do I recycle my HelloFresh box?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>

                    <p className='questionSubtitle'>Why should I choose HelloFresh as my meal kit service?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" /></button>
                    <p className='questionSubtitle'>How much does HelloFresh cost?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>Does HelloFresh support a healthy lifestyle?</p>
                </div>
                <div className="questionCards">
                    <button className='arrowBtn'>
                        <img src={arrow} alt="arrow" />
                    </button>
                    <p className='questionSubtitle'>Can I skip a week of delivery?</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Questions