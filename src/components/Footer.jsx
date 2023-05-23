import React from 'react';

const Footer = () => {
  return (
    <div className='container'>
      <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
        <div className='col mb-3' id='1'>
          <a className=''>
            <img src='img/natural.jpg' className='bi me-2' width={300} height={300}>
            </img>  
          </a>
          <p>Natural - лучшее от природы</p>
        </div>
        <div className='col mb-3'></div>
          
          <div className='col mb-4'>
            <h5>О нас</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
              <a className='nav-link p-0 text-muted'>О магазине</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Пункты выдачи заказов</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Контакты</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Наша история</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Карьера</a>
              </li>
            </ul>
            
            
          </div>
          <div className='col mb-4'>
            <h5>Онлайн покупки</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Мобильное приложение</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Оплата</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Доставка</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Обмен и возврат</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Предзаказ</a>
              </li>
              <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Условия продажи</a>
              </li>
            </ul>
          </div>
          <div className='col-auto'>
            <h5>Мы в социальных сетях</h5>
          <img src='img/facebook.png' className='bi me-2 mt-5' width={50} height={50}>
          </img>
          <img src='img/instagram.png' className='bi me-2 mt-5' width={50} height={50}>
          </img>
          <img src='img/message.png' className='bi me-2 mt-5' width={50} height={50}>
          </img>
          <img src='img/twitter.png' className='bi me-2 mt-5' width={50} height={50}>
          </img>
          </div>
      </footer>
    </div>
  )
}

export default Footer;