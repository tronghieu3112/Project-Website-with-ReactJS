import React from 'react';
import './HomePage.css'
const ProductItem = ({product}) =>{
  return (
    <div className='containerss'>
      <div className='header'>
        <div className='logo'>
          <img src="https://vending-cdn.kootoro.com/torov-cms/upload/image/1663576489879-b%C3%A1n%20n%C6%B0%E1%BB%9Bc%20t%E1%BB%B1%20%C4%91%E1%BB%99ng.jpg" alt="logo" />
          <span>Cửa Hàng Tiện Lợi</span>
        </div>
        <div className='search'>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder='search here...'  />
        </div>
        <div className='menu'>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Read Me</li>
          </ul>
        </div>
      </div>
      <div className="listproduct">
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/18/e6/70/18e670abbb330faafdfcc8ed0d5d950c.jpg" alt="product1" />
          </div>
          <div className="content">
            <span>Name: Yaour</span>
            <span>Price: 10$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/3f/ec/c7/3fecc7ce7db494e09890928b81753595.jpg" alt="product2" />
          </div>
          <div className="content">
            <span>Name: Pepsi</span>
            <span>Price: 8$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/d5/82/e6/d582e60c8b35027793585a28a6045c85.jpg" alt="product3" />
          </div>
          <div className="content">
            <span>Name: Coffee</span>
            <span>Price: 15$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/e5/bd/79/e5bd799e40caaefdc88dacabc27632d1.jpg" alt="product4" />
          </div>
          <div className="content">
            <span>Name: Rice</span>
            <span>Price: 12$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
      </div>

      <div className="listproduct">
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/98/0b/7e/980b7ede33ceaa8b6eacc39a63fe61b8.jpg" alt="product9" />
          </div>
          <div className="content">
            <span>Name: Siên Que</span>
            <span>Price: 16$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/e2/77/d8/e277d80111a1467e2e3dfc15daf2d59b.jpg" alt="product10" />
          </div>
          <div className="content">
            <span>Name: Nước Cam</span>
            <span>Price: 19$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/78/ff/a3/78ffa384919132fe1f688c1dedbe44aa.jpg" alt="product11" />
          </div>
          <div className="content">
            <span>Name: Bánh Bao</span>
            <span>Price: 20$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/e2/74/6b/e2746b67496fb8f723a9936f0a29b47a.jpg" alt="product12" />
          </div>
          <div className="content">
            <span>Name: Bắp Ran</span>
            <span>Price: 22$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
      </div>

      <div className="listproduct">
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/8b/83/a3/8b83a3af693b2b00897e8907339ce52b.jpg" alt="product5" />
          </div>
          <div className="content">
            <span>Name: Pocky</span>
            <span>Price: 18$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/21/49/da/2149da8d423d15b8d922159363b3208f.jpg" alt="product6" />
          </div>
          <div className="content">
            <span>Name: CoCaCoLa</span>
            <span>Price: 16$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/f2/10/44/f21044994e5b7a813a78f22024ca1680.jpg" alt="product7" />
          </div>
          <div className="content">
            <span>Name: Pizza</span>
            <span>Price: 25$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
        <div className="product">
          <div className='image'>
            <img src="https://i.pinimg.com/236x/6a/7c/4c/6a7c4c01dc4ebcfec91644c195c01d11.jpg" alt="product8" />
          </div>
          <div className="content">
            <span>Name: Mì UDon</span>
            <span>Price: 30$</span>
            <button type="submit"><i className="fa-solid fa-cart-shopping"></i>Mua</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="name">
          <h2>Giới Thiệu</h2>
          <span><i class="fa-solid fa-building-columns"></i>Trường Đại Học Giao THông Vận Tải</span><br />
          <span><i class="fa-solid fa-user"></i> Sinh Viên: Trương Trọng Hiếu</span><br />
          <span><i class="fa-solid fa-bookmark"></i>Đề Tài cuối kì môn công nghệ phần mền</span>
        </div>
        <div className="contact">
          <h2>Liên Hệ</h2>
          <span><i class="fa-solid fa-phone"></i>Liên hệ qua số điện thoại: 0981476xxx</span><br />
          <span><i class="fa-solid fa-envelope"></i>Email:2251120348@ut.edu.vn</span><br />
          <span><i class="fa-brands fa-facebook"></i>FaceBook: tronghieu...</span><br />
          <span><i class="fa-brands fa-instagram"></i>intasgram: tronhieu...</span>
        </div>
        <div className="payment">
          <h2>Thanh Toán</h2>
          <img src="https://i.pinimg.com/564x/c2/3f/da/c23fdab6f18934cd2c205ac5dbeb4870.jpg" alt="payment" />
        </div>
    </div>
    </div>
  );
};

export default ProductItem;
