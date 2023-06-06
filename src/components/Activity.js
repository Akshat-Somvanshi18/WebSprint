import React from 'react'

const Activity = () => {
  return (
    <>
    <section className='ActivitySection'>
    <section className='d-flex align-items-center justify-content-between py-4 px-5 mb-5'>
        <h3>Logo</h3>
        <div className='d-flex align-items-center'>
        <h3 className='px-4 pt-2'>Hello, Sudhanshu</h3>
        <img src='./images/ActivityProfileImg.svg' alt='...' id='ActivityProfileImg'/>
        </div>
    </section>
    
    <section className='d-flex align-items-center justify-content-evenly'>
    <section className='d-flex flex-column'>
    <section className='d-flex align-items-center justify-content-between border border-dark rounded-5 py-3 px-3' id='section2'>
        <div className='d-flex align-items-center'>
            <i className="material-icons">alarm</i>
            <div className='px-4'>
            <p>You have appointment with</p>
            <p className='fw-bold'>Dr. Akshat S Somvanshi</p>
            </div>
        </div>
        <div>
        <div className='d-flex align-items-center'>
        {/* <i className="material-icons">alarm</i> */}
        <p className='fw-bold'>7:00 am</p>
        </div>
        <p>Vellore, Tamil Nadu</p>
        </div>
    </section>
    
    <section className='section1'>
        <h3 className='py-3 pt-5'>Activities To Do</h3>
        <div className='d-flex align-items-center rounded-5 my-4 bg-light'>
            <img src="./images/ActivityImg1.svg" alt='...' id='ActivityImg1'/>
            <div className='ps-5'>
                <h3>Yoga & Meditation</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</h5>
                <button className='ActivityPlayButton'>Play Video</button>
            </div>
        </div>
        <div className='d-flex align-items-center rounded-5 my-4 bg-light'>
            <img src="./images/ActivityImg2.svg" alt='...' id='ActivityImg2'/>
            <div className='ps-5'>
                <h3>Exercise</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</h5>
                <button className='ActivityPlayButton'>Play Video</button>
            </div>
        </div>
        <div className='d-flex align-items-center rounded-5 my-4 bg-light'>
            <img src="./images/ActivityImg1.svg" alt='...' id='ActivityImg1'/>
            <div className='ps-5'>
                <h3>Yoga & Meditation</h3>
                <h5>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur</h5>
                <button className='ActivityPlayButton'>Play Video</button>
            </div>
        </div>
    </section>
    </section>

    <section className='d-flex flex-column align-items-center justify-content-center bg-light rounded-5' id='ArticleSection'>
        <h3 className='p-2 pt-4'>Articles To Read</h3>
        <div className='my-3 d-flex flex-column align-items-center mx-5'>
            <img src='./images/ActivityArticleImg1.svg' alt='...' id='ActivityArticleImg1' className=''/>
            <p className='text-center'>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
            </p>
        </div>
        <div className='my-3'>
            <img src='./images/ActivityArticleImg2.svg' alt='...' id='ActivityArticleImg1' className=''/>
            <p className='text-center px-5'>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
            </p>
        </div>
    </section>
    </section>

    </section>
    </>
  )
}

export default Activity
