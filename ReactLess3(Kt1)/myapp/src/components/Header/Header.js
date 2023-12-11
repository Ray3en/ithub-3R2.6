import styles from './Header.module.css'
import {ReactComponent as LogoSvg} from './icons/logo.svg'
import dinoImg from './images/dino.png'

function Header(){
    return(
        <div className={styles.header}>
            <div className={styles.header_wrapper}>
                <LogoSvg/>
                <div className={styles.menu_wrapper}>
                    <p>О нас</p>
                    <p>Услуги</p>
                    <p>Аренда</p>
                </div>
                <button className={styles.contect_btn}>Связаться</button>
            </div>
            <div className={styles.about_wrapper}>
                <h1 className='blue_main_title'>Веломастерская “Велозар”</h1>
                <p className='blue_second_text'>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
                <img src={dinoImg}/>
            </div>
        </div>
    )
}

export default Header