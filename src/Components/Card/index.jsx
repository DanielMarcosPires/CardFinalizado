import './scss/style.scss'

const Card = (props) =>{
    return(
        <>
        <section className='Card'>
            <aside className='CardLeftBar'>
                <h4 className='CardTitleResult'>Your Result</h4>
                <div>
                    <h1 className='CardValueNow'>{props.total}</h1>
                    <span className="CardRest">of 100</span>
                </div>
                <span>Great</span>
                <p className='CardText'>You scored highter then 65% of the people who have taken these tests.</p>
            </aside>
            <div className='CardRightBar'>
                <div class="CardMargin">
                    <h2 className='CardSummary'>Summary</h2>
                    <div>{props.children}</div>
                    <button className='CardRightBarButton'>Continue</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Card