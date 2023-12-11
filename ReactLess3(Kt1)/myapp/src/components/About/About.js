import styles from './About.module.css'
import bikeImg from './images/bike.png'

function About(){
    return(
        <div className={styles.about}>
            <div className={styles.about_wrapper}>
                <div className={styles.text_wrapper}>
                    <h2 className='white_main_text'>Что мы предлагаем</h2>
                    <p className='white_second_text'>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.</p>
                </div>
                <img src={bikeImg}/>
            </div>
        </div>
    )
}

export default About