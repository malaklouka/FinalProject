import React from 'react'
import './services.css'
const OurServices = () => {
    return (
        <section class="we-offer-area text-center bg-gray">
        <div class="containerSer">
         <h2 style={{color:'#bb0da4'}}>خدماتنا</h2>
                <div class="row our-offer-items less-carousel">
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-pen-fancy"></i>
                            <p>لا تصنيف ، لا فرز.
اصنع فقط مجموعة متنوعة من العناصر غير المباعة في اليوم ! </p> </div>
                    </div>
                  
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-dharmachakra"></i>
                            <p>
                            اضبط الكميات
حدد متوسط ​​كمية يوميًا واضبطه إذا لزم الأمر !                         </p>
                        </div>
                    </div>
                
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-tasks"></i>
                            <p>
                            أنشئ حسابك في 5 دقائق
إنشاء حسابك وحفظ العناصر غير المباعة !                            </p>
                        </div>
                    </div>
                   
                
                   
                    
                </div>
        </div>
    </section>
    )
}

export default OurServices
